declare module "react" {
    namespace JSX {
        interface IntrinsicElements {
            "etch-a-sketch": React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            >;
        }
    }
}

export {};
