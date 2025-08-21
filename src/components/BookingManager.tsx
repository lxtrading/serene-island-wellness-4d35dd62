
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, Mail, Phone, User, MessageCircle } from 'lucide-react';

interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  preferred_time: string;
  message: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at: string;
  user_id?: string;
}

const BookingManager = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchBookings();
    }
  }, [user]);

  const fetchBookings = async () => {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBookings(data || []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      toast({
        title: "Error",
        description: "Failed to load bookings. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (bookingId: string, status: 'confirmed' | 'cancelled') => {
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ status })
        .eq('id', bookingId);

      if (error) throw error;

      setBookings(prev =>
        prev.map(booking =>
          booking.id === bookingId ? { ...booking, status } : booking
        )
      );

      toast({
        title: "Booking Updated",
        description: `Booking has been ${status}.`
      });
    } catch (error) {
      console.error('Error updating booking:', error);
      toast({
        title: "Error",
        description: "Failed to update booking. Please try again.",
        variant: "destructive"
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  if (!user) {
    return (
      <Card className="border-purple-200">
        <CardContent className="p-8 text-center">
          <p className="text-purple-600">Please sign in to manage bookings.</p>
        </CardContent>
      </Card>
    );
  }

  if (loading) {
    return (
      <Card className="border-purple-200">
        <CardContent className="p-8 text-center">
          <p className="text-purple-600">Loading bookings...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="border-purple-200">
        <CardHeader>
          <CardTitle className="text-2xl font-serif text-purple-800">
            Booking Management ({bookings.length} total)
          </CardTitle>
        </CardHeader>
        <CardContent>
          {bookings.length === 0 ? (
            <p className="text-purple-600 text-center py-8">No bookings found.</p>
          ) : (
            <div className="space-y-4">
              {bookings.map((booking) => (
                <Card key={booking.id} className="border-purple-100">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <User className="w-4 h-4 text-purple-600" />
                          <h3 className="font-semibold text-purple-800">{booking.name}</h3>
                          <Badge className={getStatusColor(booking.status)}>
                            {booking.status}
                          </Badge>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-600">
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4" />
                            <span>{booking.email}</span>
                          </div>
                          {booking.phone && (
                            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4" />
                              <span>{booking.phone}</span>
                            </div>
                          )}
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{booking.service}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{booking.preferred_time}</span>
                          </div>
                        </div>
                        {booking.message && (
                          <div className="mt-3 flex items-start space-x-2">
                            <MessageCircle className="w-4 h-4 text-purple-600 mt-0.5" />
                            <p className="text-sm text-purple-600">{booking.message}</p>
                          </div>
                        )}
                        <p className="text-xs text-purple-400 mt-2">
                          Submitted: {new Date(booking.created_at).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        {booking.status === 'pending' && (
                          <>
                            <Button
                              size="sm"
                              onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                              className="bg-green-600 hover:bg-green-700 text-white"
                            >
                              Confirm
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                              className="border-red-300 text-red-600 hover:bg-red-50"
                            >
                              Cancel
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingManager;
