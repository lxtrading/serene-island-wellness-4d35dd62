
import { useAuth } from '@/contexts/AuthContext';
import BookingManager from '@/components/BookingManager';
import { Card, CardContent } from '@/components/ui/card';

const Admin = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen pt-20 px-4 bg-cream-50">
        <div className="max-w-4xl mx-auto py-20">
          <Card className="border-purple-200">
            <CardContent className="p-8 text-center">
              <p className="text-purple-600">Loading...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen pt-20 px-4 bg-cream-50">
        <div className="max-w-4xl mx-auto py-20">
          <Card className="border-purple-200">
            <CardContent className="p-8 text-center">
              <h1 className="text-2xl font-serif text-purple-800 mb-4">Admin Access Required</h1>
              <p className="text-purple-600">Please sign in with Google to access the admin panel.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 bg-cream-50">
      <div className="max-w-6xl mx-auto py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-purple-800 mb-4">
            Admin Panel
          </h1>
          <p className="text-lg text-purple-600">
            Welcome back, {user.email}. Manage your bookings and client information here.
          </p>
        </div>
        
        <BookingManager />
      </div>
    </div>
  );
};

export default Admin;
