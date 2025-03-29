import { toast } from "sonner";

export default function AWSIconsCardList({ icons, className }: { icons: string[], className: string }) {
    return (
        <ul className={`w-full grid grid-cols-8 p-4 ${className}`}>
            {
                icons.map(
                    (icon, index) => {
                        const iconName = icon.match(/Arch_([^/]+)_\d+\.png$/)?.pop()?.replaceAll("_", " ").replaceAll("-", " ");
                        return (
                            <li key={index} className="flex flex-col items-center text-center gap-2 bg-gray-200 m-2 pt-1 pb-5 hover:scale-108 transition duration-300 ease-in-out cursor-pointer rounded-sm justify-center hover:bg-gray-100"
                                onClick={() => {
                                    fetch(icon)
                                        .then(res => res.blob())
                                        .then(blob => {
                                            navigator.clipboard.write([
                                                new ClipboardItem({
                                                    [blob.type]: blob
                                                })
                                            ]);
                                        });
                                    toast.success(`Copied ${iconName} icon to clipboard`)
                                }}>
                                <p className="m-2" >{iconName}</p>
                                <img
                                    className="rounded-md"
                                    src={icon}
                                />
                            </li>)
                    }
                )
            }
        </ul>
    );
}