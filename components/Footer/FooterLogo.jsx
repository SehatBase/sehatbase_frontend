import Image from "next/image";

const FooterLogo = ({ width, height }) => {
  return (
    <div
      style={{
        width,
        height,
        position: "absolute",
        top: "-75px",
        borderRadius: "50%",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "85%",
          width: "85%",
        }}
      >
        <Image alt="sehatbase logo" src="/logo-footer.png" layout="fill" />
      </div>
    </div>
  );
};

export default FooterLogo;
