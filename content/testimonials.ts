export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    quote: "Nguyen is an outstanding professional—results-driven, highly focused, and always keeping the end goal in sight. Working with him is not only a rewarding professional experience but also a pleasure on a personal level.",
    name: 'Flavio Silva',
    role: 'Senior Software Engineer',
    company: 'Fonoa',
  },
  {
    quote: "Nguyen is a one-of-kind designer and technologist, who understands how to bridge design and technology to create meaningful user experiences. He is capable of envisioning the bigger picture, yet able to develop a detailed blueprint on how to accomplish each user-centered goal he designs for. Nguyen is a designer who is always on his A-game with user research, interaction design, technical direction, and product delivery. As a co-worker, you always hope to work with people who are driven to make a big impact, and who constantly push themselves to grow. I certainly found those qualities and more in Nguyen. I learned a lot from him (his knowledge in UI/UX design is unparalleled) and it was an absolute pleasure working together. I have nothing but respect and admiration for him and sincerely hope to have the opportunity to collaborate again in the future. If Nguyen is leading your product design efforts, you will be successful!",
    name: 'Nemanja Banjanin',
    role: 'Senior Product Designer',
    company: 'Fonoa',
  },
]
