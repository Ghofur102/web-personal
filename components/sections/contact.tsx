"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { CheckCircle, Loader2, Mail, MapPin, Phone } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  required?: string;
  email?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      newErrors.required = "All input is required!";
      isValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format!";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submiting form: ", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-5xl px-6 py-10 text-center">
        <h2 className="mb-10 text-3xl font-semibold text-white">
          Get in Touch!
        </h2>

        {status === "success" && (
          <div className="mb-6 flex items-center justify-center gap-2 rounded-lg border border-green-500 bg-screen-500/20 p-4 text-green-200 animate-in fade-in slide-in-from-top-5">
            <CheckCircle className="h-5 w-5" />
            <span>Message sent successfully! Thank you for contacting us.</span>
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 flex items-center justify-center gap-2 rounded-lg border border-green-500 bg-screen-500/20 p-4 text-green-200 animate-in fade-in slide-in-from-top-5">
            <CheckCircle className="h-5 w-5" />
            <span>
              Error: {errors.email != "" ? errors.email : errors.required}
            </span>
          </div>
        )}

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

        <form onSubmit={handleSubmit}>
          <div className="mt-14">
            <div className="rounded-2xl border border-white/10 bg-card p-8">
              <h3 className="mb-6 text-lg font-medium text-white">
                Contact Form
              </h3>
              {status === "success" && (
                <div className="mb-6 flex items-center justify-center gap-2 rounded-lg border border-green-500 bg-screen-500/20 p-4 text-green-200 animate-in fade-in slide-in-from-top-5">
                  <CheckCircle className="h-5 w-5" />
                  <span>
                    Message sent successfully! Thank you for contacting us.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 flex items-center justify-center gap-2 rounded-lg border border-green-500 bg-screen-500/20 p-4 text-green-200 animate-in fade-in slide-in-from-top-5">
                  <CheckCircle className="h-5 w-5" />
                  <span>
                    Error: {errors.email != "" ? errors.email : errors.required}
                  </span>
                </div>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-5 text-left">
                  <div>
                    <label className="text-sm text-muted-foreground">
                      Name
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Input your name..."
                      className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">
                      Email
                    </label>
                    <input
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Input your email..."
                      className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">
                      Phone
                    </label>
                    <input
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      type="text"
                      placeholder="Input your phone..."
                      className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-primary"
                    />
                  </div>
                </div>
                <div className="text-left">
                  <label className="text-sm text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Input your message..."
                    rows={11}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-non focus:border-primary resize-none"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="flex items-center gap-2 rounded-lg border border-white/20 px-6 py-2 text-sm text-white hover:border-primary hover:text-primary transition"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Mengirim...
                  </>
                ) : (
                  <>
                    <span>✈</span> Kirim
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
