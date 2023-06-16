import { Hero } from "@/components";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";
import { fuels, yearsOfProduction } from "@/constants";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catálogo de autos</h1>
          <p>Explora los autos que te pueden gustar </p>
        </div>
      </div>

      <div className="home__filters">
        <SearchBar />

        <div className="home__filter-container">
          <CustomFilter title="combustible" options={fuels} />
          <CustomFilter title="año" options={yearsOfProduction} />
        </div>
      </div>
    </main>
  );
}
