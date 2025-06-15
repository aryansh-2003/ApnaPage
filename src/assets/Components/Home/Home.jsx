import React, { useState } from "react";
import bg_1 from "./bg-1.webp"
import bg_2 from "./bg-main.webp"
import icic from "./icici-img.webp"
import InterviewQuestion from './Questions'

export default function Home(){

    const [activeTab, setActiveTab] = useState("Technical");

    const questionsData = {
      Technical: [
        {
          id: 1,
          question: "Q. How do you drive sales in a competitive market?",
          answer:
            "I analyze market trends and customer needs to tailor sales strategies. Building strong client relationships and leveraging team strengths are key to outperforming competitors.",
        },
        {
          id: 2,
          question: "Q. What CRM tools have you used effectively?",
          answer:
            "I have extensively used Salesforce and Zoho CRM to track sales pipelines and customer interactions. These tools help optimize sales processes and improve customer engagement.",
        },
        {
            id: 3,
            question: "Q. How do you manage a large sales team?",
            answer:
              "I set clear goals, conduct regular training, and foster open communication. Empowering team members with resources and feedback drives performance and morale.",
          },
          {
            id: 4,
            question: "Q. Explain your approach to sales forecasting.",
            answer:
              "I combine historical data analysis with market insights to create accurate forecasts. Regular updates and adjustments ensure targets remain realistic and achievable.",
          },
      ],
      Behavioural: [
        {
          id: 1,
          question: "Q. Tell me about a time you overcame a challenge.",
          answer:
            "In a previous role, I faced a drop in client retention. I introduced a follow-up system and client feedback loop, which helped retain 25% more clients.",
        },
        {
          id: 2,
          question: "Q. How do you handle stress in high-pressure situations?",
          answer:
            "I prioritize tasks, take breaks when needed, and use a focused work approach to manage stress effectively.",
        },
      ],
      "Mission-Vision": [
        {
          id: 1,
          question: "Q. How do your goals align with our company’s vision?",
          answer:
            "I value customer-first solutions and innovation, which aligns with ICICI’s mission of delivering comprehensive financial services.",
        },
        {
          id: 2,
          question: "Q. Why do you want to work at ICICI?",
          answer:
            "ICICI’s strong reputation, growth opportunities, and ethical work culture strongly align with my personal and professional values.",
        },
      ],
    };

    const currentQuestions = questionsData[activeTab];
  

    const [sol,setsol] = useState()


    const textsetter = () =>{
        setsol(holder)
    }





    return(
                <div 
                style={{backgroundColor:"rgb(248 241 255 / var(--tw-bg-opacity, 1))"}}
                className="flex p-4 pl-32  pr-32 flex-row w-full h-auto">
                   <div className="w-full  rounded-2xl ">
                   <div className="relative min-h-[220px] text-white flex border-4 border-white overflow-hidden justify-center rounded-2xl p-4 bg-white">
                    <img
                        className="absolute  inset-0 w-full h-full object-cover rounded-2xl z-0"
                        src={bg_1}
                        alt="Background"
                    />
                    <div className="z-10  relative flex-wrap flex flex-row items-center w-full">
                        <img className="w-24  rounded-l h-auto" src={icic} alt="ICICI Logo" />
                        <div className="ml-2  text-white">
                        <p className="text-2xl font-bold">Head of Field Sales</p>
                        <p>at ICICI Bank</p>
                        </div>
                    </div>
                    </div>

                        <div className="bg-white mt-6 rounded-2xl  p-6">
                            <div>
                                <p className="text-2xl font-bold">About this interview</p>
                                <p className="text-[16px] mt-4">Get an opportunity to get interviewed for ICICI Bank’s Head of Field Sales. Together with technical questions, get insights about company values and culture.</p>
                            </div>
                        </div>
                        <div class="relative rounded-2xl bg-gradient-to-r from-[#eef2ff] to-[#fdf2ff] p-6 mt-6 shadow-md">
  
                        <h2 class="text-xl font-bold text-gray-800 mb-1">Personalised Interview Cheatsheets</h2>
                        <p class="text-sm text-gray-500 mb-4">Based on your profile</p>

                        
                        <div class="relative">
                        
                            <div class="flex gap-4 overflow-x-auto pb-2 relative z-0">
                            
                            <div class="min-w-[260px] max-w-[260px] bg-white rounded-xl shadow-sm p-4">
                                <h3 class="font-medium text-sm text-gray-800 mb-2">Question: Tell me about a time when you had to solve a comp...</h3>
                                <p class="text-xs text-gray-500">In my previous role at XYZ Corp, I was tasked with optimizing...</p>
                            </div>

                            
                            <div class="min-w-[260px] max-w-[260px] bg-white rounded-xl shadow-sm p-4">
                                <h3 class="font-medium text-sm text-gray-800 mb-2">Question: How would you design a distributed cache system?</h3>
                                <p class="text-xs text-gray-500">When designing a distributed cache system, I would focus on...</p>
                            </div>

                            
                            <div class="min-w-[260px] max-w-[260px] bg-white rounded-xl shadow-sm p-4">
                                <h3 class="font-medium text-sm text-gray-800 mb-2">Question: What are key principles of microservices?</h3>
                                <p class="text-xs text-gray-500">Microservices should be loosely coupled, independently deployable...</p>
                            </div>
                            </div>

                            
                            <div class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/50 backdrop-blur-md rounded-xl">
                            <svg class="w-6 h-6 text-purple-600 mb-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 17a2 2 0 0 0 2-2v-3a2 2 0 1 0-4 0v3a2 2 0 0 0 2 2zm6-6v-1a6 6 0 1 0-12 0v1H4v10h16V11h-2zm-8-1a4 4 0 1 1 8 0v1H10v-1z"/>
                            </svg>
                            <span class="text-sm font-semibold text-purple-700">Locked</span>
                            <p class="text-xs text-center text-gray-700 px-2 mt-1">
                                This will get unlocked after your interview is completed.
                                            </p>
                                            </div>
                                        </div>
                                        </div>

                        <div className="w-full  bg-white rounded-xl mt-4  p-6 ">
                            <p className="text-xl font-bold">Prepare for the Interview</p>
                            <div className="mt-2 w-full">
                                        <div className="">
                          
                            <div className="flex  gap-4 mb-6 mt-4">
                                {["Technical", "Behavioural", "Mission-Vision"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded-full border ${
                                    activeTab === tab
                                        ? "text-purple-700 border-purple-700 bg-purple-200"
                                        : "text-black border-gray-400"
                                    }`}
                                >
                                    {tab}
                                </button>
                                ))}
                            </div>

                            
                            {currentQuestions.map((q) => (
                                <InterviewQuestion
                                key={q.id}
                                question={q.question}
                                answer={q.answer}
                                />
                            ))}
                            </div>
                                       
                            </div>
                            
                        </div>
                        <div className="p-6 relative overflow-hidden mt-8">
                        <img src={bg_2} alt="" class="absolute inset-0 z-0 h-full w-full object-cover opacity-70"/>
                                <p className="text-xl z-10 font-bold">After this interview, You'll get</p>
                                <div className="mt-4 relative w-full pt-3 pb-3 pl-2 pr-2 z-10 space-y-[16px] bg-white text-l rounded-xl">
                                    <p>Get an Interview Score and Rating amongst all the candidates.</p>
                                </div>
                                <div className="mt-4 relative w-full pt-3 pb-3 pl-2 pr-2 z-10 space-y-[16px] bg-white text-l rounded-xl">
                                    <p>Detailed Analysis and Feedback on how the interview went</p>
                                </div>
                                <div className="mt-4 relative w-full pt-3 pb-3 pl-2 pr-2 z-10 space-y-[16px] bg-white text-l rounded-xl">
                                    <p>Question wise tips to improve your answers and deliver next time</p>
                                </div>
                        </div>
                        <div className="w-full pt-4 text-[18px] flex flex-row items-center">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 8.66667H17V6.7619C17 4.13333 14.76 2 12 2C9.24 2 7 4.13333 7 6.7619V8.66667H6C4.9 8.66667 4 9.52381 4 10.5714V20.0952C4 21.1429 4.9 22 6 22H18C19.1 22 20 21.1429 20 20.0952V10.5714C20 9.52381 19.1 8.66667 18 8.66667ZM12 17.2381C10.9 17.2381 10 16.381 10 15.3333C10 14.2857 10.9 13.4286 12 13.4286C13.1 13.4286 14 14.2857 14 15.3333C14 16.381 13.1 17.2381 12 17.2381ZM9 8.66667V6.7619C9 5.18095 10.34 3.90476 12 3.90476C13.66 3.90476 15 5.18095 15 6.7619V8.66667H9Z" fill="#190A28"></path></svg>
                        <p className="ml-2">This is a mock interview for practice purposes only. Your responses and feedback won't be shared with any recruiters.</p>
                        </div>
                        <div className="w-full mt-6 mb-6 relative text-[18px] flex flex-row items-center">
                        <p className="ml-2 text-[#722ED1B3]">This page contains AI-generated content, which may occasionally be inaccurate or irrelevant.</p>
                        <svg className="absolute right-0" width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.7437 20.0953L16.4937 36.4753C16.4625 36.5663 16.4534 36.6634 16.4671 36.7586C16.4808 36.8539 16.5169 36.9445 16.5724 37.0231C16.6279 37.1017 16.7013 37.1659 16.7865 37.2106C16.8717 37.2554 16.9662 37.2792 17.0625 37.2803H18.5325C18.6637 37.2799 18.7912 37.237 18.8961 37.1582C19.001 37.0793 19.0775 36.9687 19.1143 36.8428L19.9368 34.2178H27.125L27.0243 34.0559L27.9256 36.8428C27.9624 36.9687 28.0389 37.0793 28.1438 37.1582C28.2487 37.237 28.3762 37.2799 28.5075 37.2803H29.9774C30.0737 37.2808 30.1688 37.2585 30.2548 37.2152C30.3408 37.1718 30.4152 37.1087 30.472 37.0309C30.5288 36.9532 30.5664 36.8631 30.5816 36.768C30.5967 36.6729 30.5891 36.5756 30.5593 36.484L25.3093 20.104C25.2719 19.9784 25.1952 19.8682 25.0904 19.7894C24.9857 19.7107 24.8585 19.6676 24.7275 19.6665H22.3125C22.1846 19.6691 22.0608 19.7119 21.9587 19.7889C21.8566 19.8659 21.7814 19.9731 21.7437 20.0953ZM20.8118 31.5928L23.5199 23.1621L26.25 31.5928H20.8118Z" fill="#512194"></path><path d="M36.575 19.6709H35.175C34.8367 19.6709 34.5625 19.9451 34.5625 20.2834V36.6634C34.5625 37.0017 34.8367 37.2759 35.175 37.2759H36.575C36.9133 37.2759 37.1875 37.0017 37.1875 36.6634V20.2834C37.1875 19.9451 36.9133 19.6709 36.575 19.6709Z" fill="#512194"></path><path d="M29.4263 43.8428H16.695C15.7482 43.8428 14.8401 43.4667 14.1706 42.7972C13.5011 42.1277 13.125 41.2196 13.125 40.2728V17.6628C13.125 16.716 13.5011 15.8079 14.1706 15.1384C14.8401 14.4689 15.7482 14.0928 16.695 14.0928H39.305C40.2518 14.0928 41.1599 14.4689 41.8294 15.1384C42.4989 15.8079 42.875 16.716 42.875 17.6628V28.9678C42.883 29.2065 42.985 29.4323 43.1587 29.5962C43.3324 29.7601 43.5638 29.8487 43.8025 29.8428C44.5475 29.8405 45.2828 30.0113 45.9506 30.3415C46.0892 30.4126 46.2439 30.4466 46.3996 30.4401C46.5552 30.4336 46.7066 30.3869 46.8388 30.3045C46.971 30.2221 47.0796 30.1068 47.1539 29.9699C47.2283 29.833 47.2659 29.6792 47.2631 29.5234V17.6628C47.2631 16.6183 47.0572 15.5841 46.6571 14.6193C46.257 13.6545 45.6706 12.7781 44.9314 12.0402C44.1923 11.3022 43.3149 10.7173 42.3494 10.3188C41.384 9.92029 40.3495 9.71606 39.305 9.71778H16.695C14.5879 9.71778 12.567 10.5548 11.077 12.0448C9.58706 13.5348 8.75 15.5556 8.75 17.6628V40.2728C8.75 42.3799 9.58706 44.4008 11.077 45.8908C12.567 47.3807 14.5879 48.2178 16.695 48.2178H31.2638C31.4428 48.218 31.6178 48.1652 31.7668 48.0659C31.9158 47.9667 32.0321 47.8256 32.1009 47.6603C32.1697 47.495 32.188 47.3131 32.1535 47.1374C32.119 46.9618 32.0331 46.8003 31.9069 46.6734C31.2261 46.0489 30.6747 45.2967 30.2838 44.4597C30.2211 44.2815 30.1053 44.1268 29.952 44.0164C29.7986 43.9061 29.6151 43.8455 29.4263 43.8428Z" fill="#512194"></path><path d="M48.8821 45.5054L52.8458 43.9436C52.9274 43.9113 52.9974 43.8553 53.0468 43.7827C53.0961 43.7101 53.1225 43.6244 53.1225 43.5367C53.1225 43.4489 53.0961 43.3632 53.0468 43.2907C52.9974 43.2181 52.9274 43.1621 52.8458 43.1298L48.8821 41.5679C48.1804 41.2905 47.5431 40.8721 47.0096 40.3385C46.476 39.805 46.0576 39.1677 45.7802 38.4661L44.2183 34.5286C44.1859 34.4472 44.1298 34.3774 44.0572 34.3282C43.9847 34.2791 43.8991 34.2528 43.8114 34.2529C43.7238 34.2528 43.6382 34.2791 43.5656 34.3282C43.4931 34.3774 43.437 34.4472 43.4046 34.5286L41.8427 38.4661C41.5659 39.1681 41.1478 39.8058 40.6141 40.3394C40.0805 40.873 39.4429 41.2912 38.7408 41.5679L34.8033 43.1298C34.7217 43.1621 34.6517 43.2181 34.6023 43.2907C34.553 43.3632 34.5266 43.4489 34.5266 43.5367C34.5266 43.6244 34.553 43.7101 34.6023 43.7827C34.6517 43.8553 34.7217 43.9113 34.8033 43.9436L38.7408 45.5054C39.4429 45.7822 40.0805 46.2004 40.6141 46.734C41.1478 47.2676 41.5659 47.9052 41.8427 48.6073L43.4046 52.5448C43.4363 52.627 43.4921 52.6977 43.5647 52.7477C43.6373 52.7977 43.7233 52.8245 43.8114 52.8248C43.8996 52.8245 43.9856 52.7977 44.0582 52.7477C44.1308 52.6977 44.1866 52.627 44.2183 52.5448L45.7802 48.6073C46.0576 47.9056 46.476 47.2683 47.0096 46.7348C47.5431 46.2013 48.1804 45.7829 48.8821 45.5054Z" fill="#512194"></path></svg>
                        </div>
                   </div>
                   <div className="w-120 ml-10 h-100">
                    
                   <div className="w-full bg-white p-6 rounded-t-2xl">
                        <p className="font-bold text-l">Ratings & Reviews</p>
                        <div className="w-full flex flex-row">
                        <div className="flex flex-row mt-2 items-center">
                            <img src="https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/call-icon.png" alt="Rating icon" class="h-[24px] w-[24px]"/>
                            <div className="flex flex-col items-center mr-20">
                                    <p className="font-bold">246</p>
                                    <p className="text-[10px]">Preps</p>
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 items-center mr-20">
                        <img src="https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/heart-icon.png" alt="Rating icon" class="h-[24px] w-[24px]"/>
                            <div className="flex flex-col items-center">
                                    <p className="font-bold">82%</p>
                                    <p className="text-[8px]">Found helpful</p>
                            </div>
                        </div>
                        <div className="flex flex-row mt-2 items-center">
                        <img src="https://storage.googleapis.com/mumbai_apnatime_prod/interview-prep/star-icon.png" alt="Rating icon" class="h-[24px] w-[24px]"/>
                            <div className="flex flex-col items-center">
                                    <p className="font-bold">81</p>
                                    <p className="text-[10px]">Reviews</p>
                            </div>
                        </div>
                        
                        </div>
                        </div>
                        
                   <div className="w-full border-t-2 border-gray-200 bg-white p-4 rounded-b-2xl">
                        <div className="w-full flex flex-col items-center ">
                            <p style={{color:"rgb(115 19 251 / var(--tw-text-opacity, 1))"}} className="text-[12px] pb-2 font-bold">10 mins interview slot available</p>
                            <button style={{backgroundImage:"linear-gradient(93.17deg, #06f 4.67%, #8f00ff 73.02%)"}}className=" pt-3 pb-3 pl-8 pr-8 rounded-3xl text-white font-bold w-full">Start Interview</button>
                        </div>
                   </div>

                   <div className="w-full mt-5 bg-white rounded-t-2xl">
                    <div className="w-full font-bold text-l p-4 flex flex-col items-center ">
                        <p>Share with Friends</p>
                        <div className="flex flex-row mt-6 pl-2 pr-2 ">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="41" height="41" fill="none"><g clip-path="url(#a)"><path fill="#25D366" fill-rule="evenodd" d="M34.672 5.84A19.783 19.783 0 0 0 20.584 0C9.606 0 .671 8.934.667 19.915a19.874 19.874 0 0 0 2.659 9.957L.5 40.192l10.558-2.769a19.89 19.89 0 0 0 9.517 2.424h.009c10.976 0 19.912-8.935 19.916-19.916a19.794 19.794 0 0 0-5.828-14.09ZM20.584 36.485h-.007c-2.97-.001-5.883-.8-8.425-2.307l-.605-.36-6.265 1.644 1.672-6.109-.394-.626a16.511 16.511 0 0 1-2.53-8.81c.003-9.127 7.43-16.553 16.56-16.553A16.442 16.442 0 0 1 32.295 8.22a16.452 16.452 0 0 1 4.844 11.71c-.004 9.128-7.43 16.554-16.554 16.554Zm9.08-12.398c-.498-.249-2.944-1.452-3.4-1.618-.457-.167-.789-.25-1.12.249-.331.498-1.285 1.62-1.576 1.95-.29.333-.58.374-1.078.125-.497-.25-2.1-.774-4.002-2.47-1.48-1.32-2.478-2.948-2.769-3.447-.29-.498-.03-.768.218-1.015.224-.224.498-.582.747-.872.25-.29.331-.498.497-.83.167-.332.084-.622-.04-.872-.125-.249-1.12-2.699-1.535-3.695-.404-.97-.815-.838-1.12-.854-.29-.015-.621-.017-.953-.017-.333 0-.871.124-1.328.622-.456.499-1.742 1.703-1.742 4.151 0 2.449 1.783 4.816 2.032 5.149.25.332 3.51 5.358 8.502 7.514 1.187.513 2.114.82 2.837 1.049 1.192.38 2.276.326 3.134.198.956-.144 2.944-1.205 3.359-2.367.414-1.162.414-2.159.29-2.366-.124-.207-.456-.333-.954-.582v-.002Z" clip-rule="evenodd"></path></g><defs><clipPath id="a"><path fill="#fff" d="M.5 0h40v40.222H.5z"></path></clipPath></defs></svg>
                        <svg className="ml-10" xmlns="http://www.w3.org/2000/svg" width="41" height="41" fill="none"><g clip-path="url(#a)"><path fill="#1877F2" d="M40.5 20.111c0-11.046-8.954-20-20-20s-20 8.954-20 20c0 9.983 7.314 18.257 16.875 19.757V25.892h-5.078v-5.78h5.078v-4.407c0-5.013 2.986-7.781 7.554-7.781 2.189 0 4.477.39 4.477.39v4.922h-2.522c-2.484 0-3.259 1.542-3.259 3.123v3.752h5.547l-.887 5.781h-4.66v13.976c9.561-1.5 16.875-9.774 16.875-19.757Z"></path><path fill="#fff" d="m28.285 25.893.887-5.782h-5.547V16.36c0-1.582.775-3.124 3.26-3.124h2.521V8.314s-2.288-.39-4.477-.39c-4.568 0-7.554 2.769-7.554 7.781v4.406h-5.078v5.782h5.078v13.975a20.158 20.158 0 0 0 6.25 0V25.893h4.66Z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M.5.111h40v40H.5z"></path></clipPath></defs></svg>
                        <svg className="ml-10" xmlns="http://www.w3.org/2000/svg" width="41" height="35" fill="none"><g fill="#0A66C2" clip-path="url(#a)"><path d="M38.537 31.875a.629.629 0 0 0 .594-.408.62.62 0 0 0 .037-.25c0-.468-.283-.691-.865-.691h-.94v2.445h.354v-1.066h.434l.01.013.674 1.053h.378l-.725-1.09.049-.006Zm-.41-.245h-.409v-.827h.52c.268 0 .574.044.574.393 0 .402-.31.434-.686.434M29.319 28.81h-5.012v-7.802c0-1.861-.033-4.256-2.606-4.256-2.61 0-3.01 2.027-3.01 4.12v7.938H13.68V12.764h4.81v2.193h.068a5.258 5.258 0 0 1 2.013-1.948 5.297 5.297 0 0 1 2.734-.644c5.08 0 6.016 3.322 6.016 7.643l-.002 8.802ZM8.025 10.57a2.92 2.92 0 0 1-1.616-.486 2.895 2.895 0 0 1-1.071-1.298 2.876 2.876 0 0 1 .63-3.15 2.914 2.914 0 0 1 3.169-.628c.531.219.986.59 1.305 1.065a2.88 2.88 0 0 1-.36 3.65 2.908 2.908 0 0 1-2.057.848Zm2.506 18.24H5.514V12.764h5.017V28.81ZM31.817.161H2.996a2.476 2.476 0 0 0-1.753.698A2.447 2.447 0 0 0 .5 2.585v28.773c.008.65.275 1.272.743 1.727a2.477 2.477 0 0 0 1.753.7h28.821a2.482 2.482 0 0 0 1.758-.698c.47-.455.739-1.077.748-1.729V2.583a2.452 2.452 0 0 0-.749-1.728A2.48 2.48 0 0 0 31.817.16"></path><path d="M38.172 29.436a2.313 2.313 0 0 0-1.62.684 2.286 2.286 0 0 0 .015 3.235 2.313 2.313 0 0 0 3.254 0 2.287 2.287 0 0 0 .015-3.235 2.313 2.313 0 0 0-1.62-.684h-.044Zm0 4.324c-.4.007-.793-.105-1.13-.32a2 2 0 0 1-.358-3.088 2.026 2.026 0 0 1 2.197-.473c.372.146.692.399.92.726.227.327.352.713.359 1.111v.034a1.962 1.962 0 0 1-.55 1.403 1.984 1.984 0 0 1-1.386.606h-.052"></path></g><defs><clipPath id="a"><path fill="#fff" d="M.5.159h40v33.905H.5z"></path></clipPath></defs></svg>
                        <svg className="ml-10" xmlns="http://www.w3.org/2000/svg" width="41" height="37" fill="none"><g clip-path="url(#a)"><path fill="#000" d="M31.986.04h6.104L24.757 15.38 40.5 36.184H28.13l-9.638-12.61-11.084 12.61H1.303L15.6 19.798.5.04h12.69l8.756 11.566L31.986.04Zm-2.169 32.449h3.374L11.343 3.493H7.65l22.168 28.996Z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M.5.04h40v36.144H.5z"></path></clipPath></defs></svg>
                        </div>
                    </div>
                    <div className="border-t-1 border-gray-300 p-3 flex flex-col items-center rounded-b-5xl">
                    <p style={{color:"rgb(115 19 251 / var(--tw-text-opacity, 1))"}} className="text-[12px] pb-2 font-bold">or copy link</p>
                    <div className="rounded-b-2xl w-full flex flex-row">
                    <input type="text" defaultValue={"https://l.apna.co/CUtBbQsHbUb"} className="pl-3 pr-3 pt-2 pb-2 bg-white mr-2 border-2 border-gray-100 rounded-xl overflow-hidden w-full"></input>
                    <button style={{color:"rgb(115 19 251 / var(--tw-text-opacity, 1))", border:"2px solid rgb(115 19 251 / var(--tw-text-opacity, 1))"}} className="pt-2 pb-2 pl-4 pr-4 rounded-2xl">Copy</button>
                    </div>
                    
                    </div>
                   </div>
                   </div>
                </div>
                
                
              
          
    )
}