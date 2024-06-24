import * as React from "react";
import * as Icons from "@heroicons/react/24/outline";

type IconType = {
  [key: string]: React.ComponentType<React.ComponentProps<"svg">>;
};

export default function PIcon({
  name = "home",
  size = "24",
}: {
  name: string;
  size: string;
}) {
  const componentName =
    name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("") + "Icon";

  const IconComponent = (Icons as IconType)[componentName];

  if (!IconComponent) {
    return <div>Icon Error</div>;
  }

  return (
    <div>
      <IconComponent className="w-6 h-6" />
    </div>
  );
}
