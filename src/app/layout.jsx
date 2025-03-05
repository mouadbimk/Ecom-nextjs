import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";


export const metadata = {
  title: "Hexa Shop - Home Page",
  description: "Your one stop shop for all your needs. We have everything you need from electronics to groceries.",
  image: "/images/logo.png",
  url: "https://hexashop.vercel.app",
  type: "website",  
  twitter: "",
  keywords: ["shop","electronics","groceries","fashion","home","appliances","furniture","deals","discounts","offers","coupons","buy","sell","online","store","market","products","brands","quality","best","price","delivery","fast","secure","payment","options","return","policy","customer","service","support","contact","about","us","privacy","terms","conditions","shipping","tracking","order","cart","wishlist","login","signup","account","profile","settings","notifications","news","updates","subscribe","newsletter","blog","articles","reviews","ratings","comments","social","media","facebook","instagram","twitter","linkedin","pinterest","youtube","whatsapp","telegram","snapchat","tiktok","discord","reddit","tumblr","flickr","vimeo","soundcloud","spotify","apple","google","microsoft","amazon","netflix","disney","sony","nintendo","playstation","xbox","samsung","huawei","xiaomi","oppo","vivo","oneplus","nokia","lg","htc","motorola","lenovo","asus","acer","dell","hp","sony","bose","jbl","sennheiser","skullcandy","beats","apple","samsung","xiaomi","huawei","oneplus","nokia","lg","sony","oppo","vivo","realme","asus","acer","dell","hp","lenovo","samsung","lg","sony","panasonic","philips","sharp","toshiba","sanyo","hitachi","haier","midea","gree","daikin","carrier","samsung","lg","whirlpool","haier","bosch","siemens","beko","midea","sharp","hitachi","panasonic","sanyo","toshiba","daikin","carrier","gree","samsung","lg","sony","philips","panasonic","sharp","toshiba","sanyo","hitachi","haier","midea","gree","daikin","carrier","samsung","lg","whirlpool","haier","bosch","siemens","beko","midea","sharp","hitachi","panasonic","sanyo","toshiba","daikin","carrier","gree","samsung","lg","sony","philips","panasonic","sharp",],


};
const BodyFont = Montserrat({subsets:['latin']});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${BodyFont.variable}`}
      >
       <ThemeProvider>
       <div className="container">
          <NavBar/>
          {children}
          <Footer/>
        </div>
        </ThemeProvider> 
      </body>
    </html>
  );
}
