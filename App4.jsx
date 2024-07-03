import React from 'react';

export default function App4() {
    return (
        <div className="min-h-screen bg-gray-50 p-8 bg-half-blue-white">
            {/* for openings */}
            <div className="h-20 bg-blue-100 w-1/3 p-7 mb-10 rounded-xl">
                <h1 className="text-3xl font-bold">Openings</h1>
            </div>

            {/* main content */}
            <div className="mt-12 flex gap-16   ">
                {/* card 1 */}
                <div className="max-w-sm rounded-xl overflow-hidden bg-white shadow-lg transform transition-all duration-500 hover:shadow-2xl shadow-slate-400 h-96 w-80">
                    <img
                        className="w-full h-36 object-cover rounded-t-xl transition-transform duration-500 hover:scale-110"
                        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1719643944398/4e8a7866-ebe4-486a-9cdb-8b5ad1e4644c.jpeg"
                        alt="Technical Roles"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Technical Roles</div>
                        <p className="text-gray-700 text-base">
                            If you believe you are technically proficient, these roles are for you!!
                        </p>
                    </div>
                </div>

                {/* card 2 */}
                <div className="max-w-sm rounded-xl overflow-hidden bg-white shadow-lg transform transition-all duration-500 hover:shadow-2xl shadow-slate-400 h-96 w-80">
                    <img
                        className="w-full h-36 object-cover rounded-t-xl transition-transform duration-500 hover:scale-110"
                        src="https://languagelearningdiy.com/wp-content/uploads/2023/03/people-talking-4.png"
                        alt="Non-Technical Roles"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Non-Technical Roles</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, deserunt?
                        </p>
                    </div>
                </div>

                {/* card 3 */}
                <div className="max-w-sm rounded-xl overflow-hidden bg-white shadow-lg transform transition-all duration-500 hover:shadow-2xl  shadow-slate-400 h-96  w-80   ">
                    <img
                        className="w-full h-36 object-cover rounded-t-xl transition-transform duration-500 hover:scale-110"
                        src="https://languagelearningdiy.com/wp-content/uploads/2023/03/people-talking-4.png"
                        alt="Become a member"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Become a member</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, deserunt?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
