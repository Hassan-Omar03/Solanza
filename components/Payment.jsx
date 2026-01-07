import { useState } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { countries } from "country-data";

const Payment = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        amount: "",
    });

    const [country, setCountry] = useState("");
    const [currency, setCurrency] = useState("USD");

    /* -------- Currency symbol helper (fallback safe) -------- */
    const getCurrencySymbol = (currencyCode) => {
        const symbols = {
            USD: "$",
            EUR: "€",
            GBP: "£",
            INR: "₹",
            PKR: "₨",
            JPY: "¥",
            KRW: "₩",
            AED: "د.إ",
            SAR: "﷼",
            CAD: "C$",
            AUD: "A$",
        };
        return symbols[currencyCode] || currencyCode;
    };

    /* -------- Handle input change -------- */
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Phone → country + currency detect
        if (name === "phone") {
            const phoneNumber = parsePhoneNumberFromString(value);

            if (phoneNumber && phoneNumber.isValid()) {
                const countryCode = phoneNumber.country;
                const countryData = countries[countryCode];

                if (countryData?.currencies?.length) {
                    setCurrency(countryData.currencies[0]);
                }

                setCountry(countryCode);
            }
        }

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    /* -------- Submit payment -------- */
    const handleSubmit = async (e) => {
        e.preventDefault();

        const paymentData = {
            ...formData,
            country,
            currency,
            timestamp: new Date().toISOString(),
        };

        sessionStorage.setItem("paymentData", JSON.stringify(paymentData));

        try {
            const response = await fetch(
                `/api/checkout?amount=${formData.amount}&currency=${currency.toLowerCase()}`,
                { method: "GET" }
            );

            if (!response.ok) {
                throw new Error("Failed to create checkout session");
            }

            const session = await response.json();
            window.location.href = session.url;

        } catch (error) {
            console.error("Payment error:", error);
            alert("Payment failed: " + error.message);
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
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white"
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
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white"
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
                            placeholder="+1 555 000 0000"
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                            Amount ({currency})
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">
                                {getCurrencySymbol(currency)}
                            </span>
                            <input
                                type="number"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                placeholder="0.00"
                                min="0"
                                step="0.01"
                                className="w-full pl-8 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white"
                                required
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Info */}
          

            <button
                type="submit"
                className="w-full max-w-xs mt-8 py-4 px-6 bg-white text-slate-800 font-semibold rounded-lg"
            >
                Pay Now
            </button>
        </form>
    );
};

export default Payment;
