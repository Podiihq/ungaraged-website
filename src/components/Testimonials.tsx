interface TestimonialProps {
    userName: string;
    statement: string;
}

export const Testimonial = (props: TestimonialProps) => {
    return (
        <div className="flex mx-2 max-w-xs md:max-w-sm">
            <div className="bg-[#141414] p-6 border border-[#3C3C3C] rounded-xl">
                <p className="text-xs text-[#ABABAB]">{props.userName}</p>
                <p className="mt-4 text-[#ABABAB]">"{props.statement}"</p>
            </div>
        </div>
    )
}
