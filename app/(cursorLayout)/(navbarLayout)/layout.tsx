import Navbar from "@/components/elements/navbar";
import Footer from "@/components/elements/footer";

export default function NavbarLayout({ children }: LayoutProps<"/">) {
    return (
        <>
            <Navbar />
            <div className="relative flex w-full flex-col items-center justify-start">
                {children}
                <Footer />
            </div>
        </>
    );
}
