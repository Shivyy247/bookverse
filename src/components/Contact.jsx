import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, User, MessageSquare, Send } from "lucide-react";
import { contactPageStyles as styles } from "../assets/BOOKSELLER/dummystyles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "shivyy",
        "template_85fyzsl",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "Uu5c-jSidp1jIMT5_",
      );

      showToast("success", "Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      showToast("error", "Failed to send message");
    }

    setLoading(false);
  };

  return (
    <div className={styles.containerStyle}>
      {toast.show && (
        <div className={styles.toastStyle(toast.type)}>{toast.message}</div>
      )}

      <div className="container mx-auto px-4">
        <div className={styles.headerStyle}>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Get In Touch
          </h2>
          <p className="text-gray-600">
            We'd love to hear from you. Send us a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className={styles.contactInfoCardStyle}>
            <h3 className={styles.sectionHeadingStyle}>Contact Information</h3>

            <div className="space-y-4">
              <div className={styles.contactItemStyle}>
                <Mail className="text-[#43C6AC]" />
                <span>support@bookshell.com</span>
              </div>

              <div className={styles.contactItemStyle}>
                <Phone className="text-[#43C6AC]" />
                <span>+91 98765 43210</span>
              </div>

              <div className={styles.contactItemStyle}>
                <MapPin className="text-[#43C6AC]" />
                <span>Madhya Pradesh, India</span>
              </div>
            </div>
          </div>

          <div className={styles.contactFormCardStyle}>
            <h3 className={styles.sectionHeadingStyle}>Send Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={styles.labelStyle}>Name</label>
                <div className={styles.inputWrapperStyle}>
                  <User className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.inputStyle}
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label className={styles.labelStyle}>Email</label>
                <div className={styles.inputWrapperStyle}>
                  <Mail className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.inputStyle}
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label className={styles.labelStyle}>Subject</label>
                <div className={styles.inputWrapperStyle}>
                  <MessageSquare className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={styles.inputStyle}
                    placeholder="Subject"
                  />
                </div>
              </div>

              <div>
                <label className={styles.labelStyle}>Message</label>
                <div className={styles.inputWrapperStyle}>
                  <MessageSquare className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={styles.textareaStyle}
                    placeholder="Your message"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={styles.submitButtonStyle}
              >
                {loading ? (
                  <span className={styles.sendingStyle}>Sending...</span>
                ) : (
                  <span className={styles.sendIconWrapperStyle}>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// import React, { useState } from "react";
// import { contactPageStyles as styles } from "../assets/BOOKSELLER/dummystyles";
// import {
//   AlertCircle,
//   CheckCircle,
//   Mail,
//   MapPin,
//   MessageSquare,
//   Phone,
//   Send,
//   User,
// } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [toast, setToast] = useState({
//     visible: false,
//     message: "",
//     type: "info",
//   });

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     if (!formData.message.trim()) newErrors.message = "Message is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     const whatsappNumber = "8815883393";
//     const textLines = [
//       `Name: ${formData.name}`,
//       `Email: ${formData.email}`,
//       formData.phone && `Phone: ${formData.phone}`,
//       formData.subject && `Subject: ${formData.subject}`,
//       `Message: ${formData.message}`,
//     ].filter(Boolean);

//     const text = textLines.join("\n");
//     const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
//     window.open(url, "_blank");

//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       subject: "",
//       message: "",
//     });

//     setErrors({});
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   return (
//     <div className={styles.containerStyle}>
//       {toast.visible && (
//         <div className={styles.toastStyle(toast.type)}>
//           {toast.type === "success" ? (
//             <CheckCircle className="h-5 w-5 mr-2" />
//           ) : (
//             <AlertCircle className="h-5 w-5 mr-2" />
//           )}
//           <span>{toast.message}</span>
//         </div>
//       )}

//       <div className="container mx-auto px-4 md:px-6">
//         <div className={styles.headerStyle}>
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Have questions or feedback? We'd love to hear from you.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className={styles.contactInfoCardStyle}>
//             <h2 className={styles.sectionHeadingStyle}>Contact Information</h2>
//             <div className="space-y-6">
//               <div className={styles.contactItemStyle}>
//                 <MapPin className="h-6 w-6 text-[#43C6AC]" />
//                 <div>
//                   <h3 className="font-medium text-gray-800 mb-1">Location</h3>
//                   <p className="text-gray-600">
//                     Raisen Road, Bhopal, Madhya Pradesh 462021
//                   </p>
//                 </div>
//               </div>
//               <div className={styles.contactItemStyle}>
//                 <Mail className="h-6 w-6 text-[#43C6AC]" />
//                 <div>
//                   <h3 className="font-medium text-gray-800 mb-1">Email</h3>
//                   <p className="text-gray-600">contact@bookshell.com</p>
//                 </div>
//               </div>
//               <div className={styles.contactItemStyle}>
//                 <Phone className="h-6 w-6 text-[#43C6AC]" />
//                 <div>
//                   <h3 className="font-medium text-gray-800 mb-1">Call us</h3>
//                   <p className="text-gray-600">+91 1122334455</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className={styles.contactFormCardStyle}>
//             <h2 className={styles.sectionHeadingStyle}>
//               Send us a message via whatsapp
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {["name", "email"].map((field) => (
//                   <div className="space-y-2" key={field}>
//                     <label className={styles.labelStyle}>
//                       {field.charAt(0).toUpperCase() + field.slice(1)}
//                     </label>

//                     <div className={styles.inputWrapperStyle}>
//                       {field === "name" ? (
//                         <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                       ) : (
//                         <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                       )}

//                       <input
//                         type={field === "email" ? "email" : "text"}
//                         name={field}
//                         value={formData[field]}
//                         onChange={handleChange}
//                         className={styles.inputStyle}
//                       />

//                       {errors[field] && (
//                         <p className={styles.errorStyle}>{errors[field]}</p>
//                       )}
//                     </div>
//                   </div>
//                 ))}

//                 <div className="space-y-2">
//                   <label className={styles.labelStyle}>
//                     Phone <span className="text-gray-500">(optional)</span>
//                   </label>
//                   <div className={styles.inputWrapperStyle}>
//                     <Phone className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className={styles.inputStyle}
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className={styles.labelStyle}>
//                     Subject <span className="text-gray-500">(optional)</span>
//                   </label>
//                   <input
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className={styles.inputStyle}
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label className={styles.labelStyle}>Message</label>
//                 <div className={styles.inputWrapperStyle}>
//                   <MessageSquare className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
//                   <textarea
//                     name="message"
//                     rows="4"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className={styles.textareaStyle}
//                   />
//                   {errors.message && (
//                     <p className={styles.errorStyle}>{errors.message}</p>
//                   )}
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={styles.submitButtonStyle}
//               >
//                 <div className={styles.sendIconWrapperStyle}>
//                   <Send className="w-5 h-5 mr-2" />
//                   Send via whatsapp
//                 </div>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
