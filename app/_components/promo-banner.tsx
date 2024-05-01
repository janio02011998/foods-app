import Image, { ImageProps } from "next/image";

interface PromoBannerProps extends ImageProps {
  alt: string;
}

const PromoBanner = (props: PromoBannerProps) => {
  return (
    <Image
      {...props}
      alt={props.alt}
      width={0}
      height={0}
      className="h-auto w-full object-contain"
      sizes="100vw"
      quality={100}
    />
  );
};

export default PromoBanner;
