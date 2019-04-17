import React from 'react';

declare module '*.module.css' {
    const styles: any;
    export = styles;
}

declare module '*.module.scss' {
    const styles: any;
    export = styles;
}

declare module '*.svg' {
    const value: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
    export default value;
}
