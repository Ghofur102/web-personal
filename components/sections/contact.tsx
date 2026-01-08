import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-5xl px-6 py-10 text-center">
        <h2 className="mb-10 text-3xl font-semibold text-white">
          Get in Touch!
        </h2>

        <div className="flex flex-wrap justify-center gap-10 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-white" />
            <span>Singojuruh, Banyuwangi</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-white" />
            <span>+6285733532098</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-white" />
            <span>muhamadabdulghofur84@gmail.com</span>
          </div>
        </div>
        <div className="mt-14">
          <div className="rounded-2xl border border-white/10 bg-card p-8">
            <h3 className="mb-6 text-lg font-medium text-white">
              Contact Form
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-5 text-left">
                <div>
                  <label className="text-sm text-muted-foreground">Name</label>
                  <input
                    type="text"
                    placeholder="Input your name..."
                    className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Email</label>
                  <input
                    type="email"
                    placeholder="Input your email..."
                    className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Phone</label>
                  <input
                    type="text"
                    placeholder="Input your phone..."
                    className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-primary"
                  />
                </div>
              </div>
              <div className="text-left">
                <label className="text-sm text-muted-foreground">Message</label>
                <textarea placeholder="Input your message..." rows={11} className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-non focus:border-primary resize-none"></textarea>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button className="flex items-center gap-2 rounded-lg border border-white/20 px-6 py-2 text-sm text-white hover:border-primary hover:text-primary transition">
             <span>✈</span> Kirim
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
