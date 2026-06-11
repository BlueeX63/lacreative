import React from "react";
import HowItWorksSection from "@/components/services/HowItWorksSection";
import ServiceFeatureSection from "@/components/services/ServiceFeatureSection";

export const metadata = {
  title: "Services | LA Creative Marketing",
  description: "Explore our comprehensive suite of digital marketing, branding, web development, and content creation services designed to elevate your brand.",
};

export default function ServicesPage() {
  return (
    <main className="w-full bg-[#fbfbfb] min-h-screen">
      {/* Spacer for fixed navbar */}
      <div className="h-24 w-full bg-white"></div>

      <HowItWorksSection />

      <ServiceFeatureSection 
        number="01"
        title="BRANDING"
        subHeading="BEFORE YOU CAN GROW YOUR BUSINESS, YOU NEED TO BUILD YOUR DIGITAL IDENTITY"
        description={
          <>
            <p>
              Whether you're starting from scratch or looking for a boost, L.A. Creative Marketing is here to help. When you take advantage of our branding services, we'll work with you to build out your brand, grow your digital presence, and meet and exceed your business goals.
            </p>
          </>
        }
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
        backgroundColor="bg-[#fbfbfb]"
        textColor="text-black"
        subHeadingIconColor="text-[#2ca59f]"
        buttonColor="border-[#3b477b] text-[#3b477b]"
        buttonHoverBg="from-[#3b477b] to-[#2ca59f]"
        isReversed={true}
      />

      <ServiceFeatureSection 
        number="02"
        title="GRAPHIC DESIGN"
        subHeading="KEEP YOUR PLATFORMS LOOKING THEIR BEST WITH OUR GRAPHIC DESIGN SERVICES"
        description={
          <>
            <p>
              From logos to infographics to website copy, we create stylish and functional designs that are sure to boost engagement in no time. Bring your brand story to life in the most visually stunning way possible by taking advantage of our graphic design services today.
            </p>
          </>
        }
        imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop"
        isReversed={false}
        backgroundColor="bg-[#e7e3ef]"
        textColor="text-[#481c75]"
        subHeadingIconColor="text-[#2ca59f]"
        buttonColor="border-[#6b429c] text-[#6b429c]"
        buttonHoverBg="from-[#6b429c] to-[#9e7ccc]"
      />

      <ServiceFeatureSection 
        number="03"
        title="WEB DESIGN"
        subHeading="WE UNDERSTAND HOW IMPORTANT A WELL-CRAFTED WEBSITE IS TO THE SUCCESS OF YOUR BUSINESS"
        description={
          <>
            <p>
              Clear details, strong visual elements, and high functionality all play a role in audience impressions of your site and company. With services including front- and back-end website design, regular updates, and search engine optimization (SEO), we ensure your site will be at the top of the search results—and your audience's minds.
            </p>
          </>
        }
        imageSrc="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop"
        backgroundColor="bg-[#effdf7]"
        textColor="text-[#267468]"
        subHeadingIconColor="text-[#3b477b]"
        buttonColor="border-[#2a8b84] text-[#2a8b84]"
        buttonHoverBg="from-[#2a8b84] to-[#37a89e]"
        isReversed={true}
      />

      <ServiceFeatureSection 
        number="04"
        title="PHOTOGRAPHY"
        subHeading="HIGH QUALITY PHOTOGRAPHY THAT LEADS TO SUPERIOR CONTENT FOR YOUR WEBSITE AND/OR SOCIAL MEDIA"
        description={
          <>
            <p>
              Bring your brand to life in stunning detail with our professional photography and videography services. Showcase everything that makes your brand unique, from your staff to your offerings to your location, in bite-sized, engaging snippets designed to catch your target audience's eye. Our wide range of photography and videography services includes shooting events and products, retouching, sound design, and platform-focused optimization.
            </p>
          </>
        }
        imageSrc="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop"
        isReversed={false}
        backgroundColor="bg-[#fefefe]"
        textColor="text-black"
        subHeadingIconColor="text-[#2ca59f]"
        buttonColor="border-[#3b477b] text-[#3b477b]"
        buttonHoverBg="from-[#3b477b] to-[#2ca59f]"
      />

      <ServiceFeatureSection 
        number="05"
        title="VIDEOGRAPHY"
        subHeading="WHEN IT COMES TO STANDING OUT FROM THE COMPETITION, WRITTEN CONTENT IS NOT ENOUGH"
        description={
          <>
            <p>
              Bring your brand to life in stunning detail with our professional photography and videography services. Showcase everything that makes your brand unique, from your staff to your offerings to your location, in bite-sized, engaging snippets designed to catch your target audience's eye. Our wide range of photography and videography services includes shooting events and products, retouching, sound design, and platform-focused optimization.
            </p>
          </>
        }
        imageSrc="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop"
        isReversed={true}
        backgroundColor="bg-[#e8e6ee]"
        textColor="text-black"
        subHeadingIconColor="text-[#2ca59f]"
        buttonColor="border-[#3b477b] text-[#3b477b]"
        buttonHoverBg="from-[#3b477b] to-[#2ca59f]"
      />

      <ServiceFeatureSection 
        number="06"
        title="EMAIL & SOCIAL MARKETING"
        subHeading="KEEP YOUR AUDIENCE ENGAGED WITH IMPACTFUL EMAIL AND SOCIAL MEDIA MARKETING"
        description={
          <>
            <p>
              From list building, template design, campaign development, and automation to content creation and platform-specific optimization, L.A. Creative Marketing delivers strategies that reach the right people at the right time. With our expertise, your brand gains exclusive visibility, consumer trust, and lasting engagement—making competition for attention a thing of the past.
            </p>
          </>
        }
        imageSrc="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2000&auto=format&fit=crop"
        isReversed={false}
        backgroundColor="bg-[#f0fcfa]"
        textColor="text-[#481c75]"
        subHeadingIconColor="text-[#2ca59f]"
        buttonColor="border-[#6b429c] text-[#6b429c]"
        buttonHoverBg="from-[#6b429c] to-[#9e7ccc]"
      />

      <ServiceFeatureSection 
        number="07"
        title="SEO"
        subHeading="FEW TOOLS ARE BETTER FOR MAKING YOUR COMPANY STAND OUT FROM THE CROWD THAN SEO"
        description={
          <>
            <p>
              By improving every aspect of your online presence—from written and visual content to the functionality of your website—you can increase your search engine ranking and, in turn, your visibility. Through services including SEO integration and optimization, we make this process simple and stress-free, ensuring you reap only the rewards of our SEO expertise.
            </p>
          </>
        }
        imageSrc="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2000&auto=format&fit=crop"
        isReversed={true}
        backgroundColor="bg-[#ffffff]"
        textColor="text-[#267468]"
        subHeadingIconColor="text-[#3b477b]"
        buttonColor="border-[#2a8b84] text-[#2a8b84]"
        buttonHoverBg="from-[#2a8b84] to-[#37a89e]"
      />

    </main>
  );
}
