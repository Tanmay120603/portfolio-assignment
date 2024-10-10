const bioDetails={
    fullName:"Tanmay Bhansali",
    firstName:"Tanmay",
    role:["Full Stack Developer","UI/UX Designer","Programmer"],
    description:"I am an aspiring web developer with a solid foundation in web development principles and a strong desire to learn and grow in this dynamic field.",
    resumeUrl:"https://drive.google.com/file/d/16h_25WoelkNJIUa9GtesgVNjGe-IEoPI/view?usp=drive_link",
    socialLogos:[{imgUrl:"/assets/logos/Linkedin-Logo.png",altText:"LinkedIn-logo",redirectUrl:"https://www.linkedin.com/in/tanmay-bhansali/"},{imgUrl:"/assets/logos/Github-Logo.png",altText:"Github-logo",redirectUrl:"https://github.com/Tanmay120603/"},{imgUrl:"/assets/logos/Twitter-Logo.png",redirectUrl:"https://x.com/tanmaybhansali1"}]   
}

const skillsDetails=[
    {domainName:"Frontend",skills:[{skillName:"React",skillLogo:"/assets/logos/React-Logo.png"},{skillName:"Redux",skillLogo:"/assets/logos/Redux-Logo.png"},{skillName:"Javascript",skillLogo:"/assets/logos/Js-Logo.png"},{skillName:"Html",skillLogo:"/assets/logos/Html-Logo.png"},{skillName:"Css",skillLogo:"/assets/logos/Css-Logo.png"},{skillName:"Tailwind Css",skillLogo:"/assets/logos/Tailwind-Css-Logo.png"}]},

    {domainName:"Backend",skills:[{skillName:"Node.js",skillLogo:"/assets/logos/Node-Js-Logo.png"},{skillName:"Express.js",skillLogo:"/assets/logos/Express-Logo.png"},{skillName:"Mongo DB",skillLogo:"/assets/logos/Mongodb-Logo.png"},{skillName:"Firebase",skillLogo:"/assets/logos/Firebase-Logo.png"},{skillName:"Appwrite",skillLogo:"/assets/logos/Appwrite-Logo.png"},{skillName:"Mongoose",skillLogo:"/assets/logos/Mongoose-Logo.png"}]},
    
    {domainName:"Others",skills:[{skillName:"Git",skillLogo:"/assets/logos/Git-Logo.png"},{skillName:"Github",skillLogo:"/assets/logos/Github-Logo.png"},{skillName:"Postman",skillLogo:"/assets/logos/Postman-Logo.png"},{skillName:"Rest API",skillLogo:"/assets/logos/Rest-Api-Logo.png"}]}
]

const projectDetails=[

    {name:"Magic Estate",description:"Crafted a dynamic real estate platform using React.js, Node.js, Express.js, and MongoDB. Users can seamlessly search for properties with filters like rent/buy, property type, and price range. Implemented auto-suggest functionality for area search, refining suggestions based on filters. Enabled users to post properties with current location tagging or manual selection via a map interface. Secure authentication via JWT tokens ensures protected features accessibility. Real-time chat functionality utilizing Socket.IO provides instant communication between users and property owners. Enhanced UX with property map visualization, image sliders, and robust frontend validation using Formik & Yup.",projectHeroImg:"/assets/Magic-Estate-HomePage.PNG",liveUrl:"https://magic-estate-server.onrender.com/",usedTechnologies:["MongoDB", "Mongoose", "NodeJS", "ExpressJS", "Socket.IO", "ReactJS", "SASS"]},

    {name:"Code Sync",description:"Crafted a cutting-edge code editor application leveraging React, Tailwind CSS, Express, Node.js, and Socket.IO to facilitate real-time collaborative coding experiences. Users can seamlessly join rooms, code, execute, and witness instant results. Leveraging Socket.IO, the application ensures synchronized updates across all connected users, fostering a dynamic collaborative environment. Furthermore, automatic synchronization welcomes new users into ongoing sessions seamlessly. Emphasizing user experience, the project also features custom error handling with a dedicated 404 page.",projectHeroImg:"/assets/CodeSync.png",liveUrl:"https://real-time-code-editor-rho.vercel.app/",usedTechnologies:["Javascript", "ReactJS" ,"Redux", "Tailwind CSS", "Appwrite"]},
    
    {name:"Blog-site",description:"Created a blog site where the user can view and explore posts with other features such as protected routes ensuring secure access, guiding users to login if not authenticated, and seamlessly redirecting them back to the intended blog post upon successful login (React-router). The AI Assistance feature allows users to optimize or generate titles/content using the OpenAI API. Personalized Page enables users to manage active/inactive posts with filtering/editing. Backend operations are handled efficiently via Appwrite, while image optimization ensures compressed images and efficient storage (Compressor.js, Appwrite). Data caching implemented with Redux enables seamless page-switching without additional network requests.",projectHeroImg:"/assets/Blog-HomePage.png",liveUrl:"https://blog-project-pink.vercel.app/",usedTechnologies:["NodeJS", "ExpressJS", "Socket.IO", "ReactJS", "Tailwind CSS"]}]

    const contactDetails={email:"tanmaybhansali07@gmail.com",phoneNumber:"9372385167"}

export {bioDetails,skillsDetails,projectDetails,contactDetails}