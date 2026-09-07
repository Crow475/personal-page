import Navbar from "@/components/elements/navbar";

export default function NavbarLayout({ children }: LayoutProps<"/">) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
