const ExpTimeline = ({ experience }) => {
    return (
        <div className="relative flex gap-6">
            {/* Timeline Line and Dot */}
            <div className="flex flex-col items-center">
                {/* Dot */}
                <div className="w-4 h-4 bg-purple-600 rounded-full z-10 shadow-md"></div>
                {/* Vertical Line */}
                <div className="flex-1 w-px bg-purple-300 mt-1"></div>
            </div>

            {/* Timeline Content */}
            <div className="my-4 bg-transparent shadow-[6px_6px_14px_rgba(0,0,0,0.2),-8px_-8px_18px_rgba(255,255,255,0.55)]  p-4 rounded-md  w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">{experience.role}</h3>
                        <p className="text-md font-medium text-gray-700 mt-1">{experience.name}</p>
                    </div>
                    <div className="text-sm text-gray-600 mt-2 sm:mt-0 sm:text-right">
                        <p>{experience.duration}</p>
                        <p>{experience.location}</p>
                    </div>
                </div>
                {experience.info && (
                    <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                        {experience.info}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ExpTimeline;
