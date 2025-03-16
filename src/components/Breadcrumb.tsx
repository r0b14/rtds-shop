import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  items: { label: string; path: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="text-gray-700 text-sm mb-4">
      <ul className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <Link to={item.path} className="hover:underline">
              {item.label}
            </Link>
            {index < items.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
