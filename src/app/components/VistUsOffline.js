import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const VisitUsOffline = () => {
  return (
    <section className="bg-[#EEEEEE] rounded-3xl py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Info Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us Offline</h2>
          <p className="text-gray-600 mb-6">
            We'd love to meet you in person! Stop by our office during business hours or give us a call to schedule a visit.
          </p>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <MapPin className="text-primary w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold">Our Address</p>
                <p>102B Dohil Chambers <br /> Nehru Place</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-primary w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>+91 93122 47627</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-primary w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p>contactus@divvycomputronix.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map or Image */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Our Location"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=divvy computronix&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            className="w-full h-96 border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      
    </section>
  );
};

export default VisitUsOffline;
