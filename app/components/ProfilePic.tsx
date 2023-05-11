import Image from "next/image";

export default function ProfilePic() {
    return (
        <section className="w-full mx-auto">
            <Image
                className="border-4 border-orange drop-shadow-xl shadow-black mx-auto mt-8 mb-2"
                src="/images/remi.jpg"
                width={200}
                height={200}
                alt="0xIchigo"
                priority={true}
            />
        </section>
    );
}