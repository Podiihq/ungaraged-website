interface TestimonialProps {
    userName: string;
    statement: string;
}

export const Testimonial = (props: TestimonialProps) => {
    return (
        <div className="flex mx-1 lg:mx-2 max-w-[270px] md:max-w-sm">
            <div className="bg-[#141414] p-6 border border-[#3C3C3C] rounded-xl">
                <p className="text-xs text-[#ABABAB]">{props.userName}</p>
                <p className="mt-4 text-[#ABABAB] text-sm md:text-base">"{props.statement}"</p>
            </div>
        </div>
    )
}
