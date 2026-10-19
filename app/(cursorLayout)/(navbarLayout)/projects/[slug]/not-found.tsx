import NotFoundPage from "@/components/elements/notFoundPage";

export default function NotFound() {
    return (
        <div className="flex min-h-svh w-full">
            <NotFoundPage errorText="No such project found" />
        </div>
    );
}
