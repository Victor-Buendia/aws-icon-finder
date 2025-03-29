export default function AWSIconsCardList({icons}: {icons: string[]}) {
    return (
        <div>
            <ul className="grid grid-cols-8">
                {
                    icons.map(
                        (icon, index) => {
                            return (
                                <li key={index}>
                                    {icon.match(/Arch_([^/]+)_\d+\.png$/)?.pop()?.replaceAll("_", " ").replaceAll("-", " ")}
                                    <img src={icon} />
                                </li>)
                        }
                    )
                }
            </ul>
        </div>
    );
}