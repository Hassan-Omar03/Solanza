import { useState } from "react";
import { loadStripe } from '@stripe/stripe-js';

const Payment = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        amount: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const paymentData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            amount: formData.amount,
            timestamp: new Date().toISOString()
        };

        sessionStorage.setItem('paymentData', JSON.stringify(paymentData));

        try {
            // Create checkout session
            const response = await fetch(`/api/checkout?price=${formData.amount}`, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error('Failed to create checkout session');
            }

            const session = await response.json();

            // Redirect directly to Stripe Checkout using the session URL
            window.location.href = session.url;

        } catch (error) {
            console.error('Payment error:', error);
            alert('Payment failed: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">
                Payment Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                            required
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                            Amount
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">
                                $
                            </span>
                            <input
                                type="number"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                placeholder="0.00"
                                min="0"
                                step="0.01"
                                className="w-full pl-8 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                                required
                            />
                        </div>
                    </div>
                </div>
            </div>

            <button
                type="submit"
                className="w-full max-w-xs mt-8 py-4 px-6 bg-white text-slate-800 font-semibold rounded-lg hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200"
            >
                Pay Now
            </button>
        </form>
    );
};

export default Payment;
