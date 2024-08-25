"use client";
import PropertyCard from "@/components/UI/PropertyCard";
import PropertyArr from "@/properties.json";
import { TProperties, TProperty } from "@/types/Properties";

const Page = () => {
  const properties: TProperties = PropertyArr;
  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          {properties.length === 0 ? (
            <p>No properties found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map((property: TProperty) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;
