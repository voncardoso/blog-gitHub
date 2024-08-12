import tailwindConfig from '../../../tailwind.config.js';

export const GridColors = () => {
    const colors = tailwindConfig.theme.extend.colors || {};

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 w-full ">
            {Object.entries(colors).map(([colorName, colorValue]) => {
                if (typeof colorValue === 'string') {
                    return (
                        <div key={colorName} className=" min-w-[200px] flex flex-col items-center">
                            <div className={"w-full h-10 p-2"} style={{backgroundColor: colorValue}}></div>
                            <p>{colorName}</p>
                        </div>
                    );
                } else {
                    return Object.entries(colorValue).map(([shade, hex]) => (
                        <div key={`${colorName}-${shade}`} className="min-w-[200px] flex flex-col items-center">
                            <div className={'w-full h-10 p-2'} style={{backgroundColor: hex}}></div>
                            <p>{`${colorName}-${shade}`}</p>
                        </div>
                    ));
                }
            })}
        </div>
    );
};