// import Marquee from "react-fast-marquee"
// import GridBackgroundDemo from "../components/grid.js"


// export default function Blogs () {
//     return (
//         <>
//             <div className="bg-[#EEEEEE] min-h-screen w-screen overflow-auto">       
//                 <div className="flex-col md:text-9xl grid grid-cols-5 grid-rows-5 max-h-screen pt-4 lg:pt-12 border border-red-500 " id="head">
//                     <div className="row-start-1  text-[120px] lg:text-[350px] col-end-6 col-start-1 mt-16 lg:row-start-2 z-0">
//                     <Marquee >BLOGS &nbsp;</Marquee>
//                     </div>
                

//                 <div className=" text-lg ml-3 mr-3 mt-28 mb-10 lg:mt-64 row-start-2 col-end-6 col-start-1 lg:text-4xl lg:col-start-1 lg:col-end-3 lg:row-start-3" id="subhead">
//                 Tech Solutions, Repair Tips, and Technology Trends – Stay Updated with Divvy Computronix
//                 </div>
//                 {/* <div id="blogs" className=" rounded-3xl  bg-black row-start-3 col-start-1  col-end-6 lg:col-start-4 lg:row-start-1 lg:translate-y-[60px] lg:row-end-6" > */}
//                 <div id="blogs" className=" rounded-3xl  bg-black row-start-4 row-end-6 col-start-1 lg:col-start-4 lg:row-start-1 lg:translate-y-[60px] lg:row-end-6 col-end-6 z-10" >

//                     <div className="mx-4 h-[30%] bg-white rounded-3xl   flex flex-col justify-center w-[90%]  bg-black row-start-1 col-start-1 z-10" id="blocks">
//                     </div>        
//                 </div> 
//             </div>  
//             </div>

//             {/* <div><GridBackgroundDemo /></div> */}
            
//         </>

//     )
// }



import Marquee from "react-fast-marquee";
import Image from "next/image";

const blogPosts = [
  {
    image: "https://i.pinimg.com/750x/f3/b5/8f/f3b58f860a9e8487e2eb7e853e1f4f8e.jpg", 
    title: "How to Speed Up Your Laptop",
    description: "Discover effective ways to make your old laptop run faster. Quick fixes and pro tips inside.",
  },
 
];

export default function Blogs() {
  return (
    <>
      <div className="bg-[#EEEEEE] min-h-screen w-screen overflow-auto">
        <div className="flex-col md:text-9xl grid grid-cols-5 grid-rows-5 max-h-screen pt-4 lg:pt-12" id="head">
          <div className="row-start-1 text-[120px] lg:text-[350px] col-end-6 col-start-1 mt-16 lg:row-start-2 z-0">
            <Marquee>BLOGS &nbsp;</Marquee>
          </div>

          <div className="text-lg ml-3 mr-3 mb-10 mt-20 my-10 lg:mt-64 row-start-2 col-end-6 col-start-1 lg:text-4xl lg:col-start-1 lg:col-end-3 lg:row-start-3 " id="subhead">
            Tech Solutions, Repair Tips, and Technology Trends – Stay Updated with Divvy Computronix
          </div>

          <div id="blogs" className="rounded-3xl bg-black row-start-3 row-end-6 col-start-1 lg:col-start-4 lg:row-start-1 lg:translate-y-[60px] lg:row-end-6 col-end-6 z-10 p-4 space-y-6 overflow-y-auto mt-14">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-[#EEEEEE] rounded-3xl shadow-lg flex flex-col md:flex-row items-center p-4 gap-4">
                <div className="w-full md:w-1/3 h-[180px] relative">
                  <Image src={post.image} alt={post.title} fill className="object-cover rounded-2xl" />
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-700 text-xl ">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
