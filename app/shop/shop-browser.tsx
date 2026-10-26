"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "@/app/components/product/product-card";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/lib/utils";
import { products, categories, collections } from "@/dummyData";

type Show = "all" | "new" | "sale";
const PRICE_MAX = 10000;
const SHOP_SIZES = "(min-width: 1280px) 293px, (min-width: 1024px) 21vw, 46vw";
const SHOW_OPTIONS: [Show, string][] = [
  ["all", "Everything"],
  ["new", "New arrivals"],
  ["sale", "On sale"],
];

const optionClass = (selected: boolean) =>
  cn(
    "w-full text-left px-3 py-2 text-sm rounded-lg transition-colors",
    selected ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-accent"
  );

function FilterGroup({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div role="group" aria-labelledby={id}>
      <h2 id={id} className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
        {title}
      </h2>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

const asShow = (filter: string | null): Show => (filter === "new" || filter === "sale" ? filter : "all");

/**
 * The shop with its filters in sync with the URL: links such as /shop?filter=sale, Back and Forward
 * all set the "Show" filter, and picking one rewrites the query string without a reload.
 * useSearchParams needs a Suspense boundary; the page renders <ShopBrowser /> as its fallback.
 */
export default function ShopBrowserWithUrl() {
  const params = useSearchParams();
  const changeShow = (next: Show) => {
    const query = new URLSearchParams(params.toString());
    if (next === "all") query.delete("filter");
    else query.set("filter", next);
    const qs = query.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  };
  return <ShopBrowser show={asShow(params.get("filter"))} onShowChange={changeShow} />;
}

export function ShopBrowser({ show = "all", onShowChange }: { show?: Show; onShowChange?: (show: Show) => void }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, PRICE_MAX]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(
      (p) =>
        (show === "all" || (show === "new" ? p.isNew : p.isSale)) &&
        (!selectedCategory || p.category === selectedCategory) &&
        (!selectedCollection || p.collection === selectedCollection) &&
        p.price >= priceRange[0] &&
        p.price <= priceRange[1]
    );
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered = filtered.filter((p) => p.isNew).concat(filtered.filter((p) => !p.isNew));
        break;
    }
    return filtered;
  }, [show, selectedCategory, selectedCollection, priceRange, sortBy]);

  const hasFilters =
    show !== "all" || !!selectedCategory || !!selectedCollection || priceRange[0] > 0 || priceRange[1] < PRICE_MAX;

  const clearFilters = () => {
    onShowChange?.("all");
    setSelectedCategory("");
    setSelectedCollection("");
    setPriceRange([0, PRICE_MAX]);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <button
        type="button"
        onClick={() => setShowFilters(!showFilters)}
        aria-expanded={showFilters}
        aria-controls="shop-filters"
        className="lg:hidden self-start inline-flex items-center gap-2 h-10 px-4 rounded-lg border border-border text-foreground text-sm font-medium"
      >
        <SlidersHorizontal aria-hidden="true" className="w-4 h-4" />
        Filters
        {hasFilters && (
          <span className="w-2 h-2 rounded-full bg-primary">
            <span className="sr-only">(active)</span>
          </span>
        )}
      </button>

      <aside
        id="shop-filters"
        aria-label="Filters"
        className={cn("lg:block lg:w-64 flex-shrink-0", showFilters ? "block enter-fade" : "hidden")}
      >
        <div className="space-y-8">
          <FilterGroup id="filter-show" title="Show">
            {SHOW_OPTIONS.map(([value, label]) => (
              <button
                key={value}
                type="button"
                aria-pressed={show === value}
                onClick={() => onShowChange?.(value)}
                className={optionClass(show === value)}
              >
                {label}
              </button>
            ))}
          </FilterGroup>

          <FilterGroup id="filter-categories" title="Categories">
            <button
              type="button"
              aria-pressed={!selectedCategory}
              onClick={() => setSelectedCategory("")}
              className={optionClass(!selectedCategory)}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                aria-pressed={selectedCategory === cat.name}
                onClick={() => setSelectedCategory(selectedCategory === cat.name ? "" : cat.name)}
                className={optionClass(selectedCategory === cat.name)}
              >
                {cat.name}
                <span className="text-xs ml-2 text-muted-foreground">({cat.productCount})</span>
              </button>
            ))}
          </FilterGroup>

          <FilterGroup id="filter-collections" title="Collections">
            <button
              type="button"
              aria-pressed={!selectedCollection}
              onClick={() => setSelectedCollection("")}
              className={optionClass(!selectedCollection)}
            >
              All Collections
            </button>
            {collections.map((col) => (
              <button
                key={col.id}
                type="button"
                aria-pressed={selectedCollection === col.name}
                onClick={() => setSelectedCollection(selectedCollection === col.name ? "" : col.name)}
                className={optionClass(selectedCollection === col.name)}
              >
                {col.name}
              </button>
            ))}
          </FilterGroup>

          <FilterGroup id="filter-price" title="Price Range">
            <div className="flex gap-2">
              <input
                type="number"
                inputMode="numeric"
                min={0}
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-full min-w-0 h-9 px-2 rounded-lg border border-border bg-background text-sm text-foreground"
                placeholder="Min"
                aria-label="Minimum price (ETB)"
              />
              <span aria-hidden="true" className="text-muted-foreground self-center">
                -
              </span>
              <input
                type="number"
                inputMode="numeric"
                min={0}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full min-w-0 h-9 px-2 rounded-lg border border-border bg-background text-sm text-foreground"
                placeholder="Max"
                aria-label="Maximum price (ETB)"
              />
            </div>
          </FilterGroup>

          {hasFilters && (
            <Button variant="outline" size="sm" className="w-full" onClick={clearFilters}>
              <X aria-hidden="true" className="w-3 h-3" />
              Clear all filters
            </Button>
          )}
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-4 mb-6">
          <p className="text-sm text-muted-foreground" aria-live="polite">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
          </p>
          <select
            aria-label="Sort products"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-9 px-3 rounded-lg border border-border bg-background text-sm text-foreground cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">No products match your filters.</p>
            <Button variant="outline" className="mt-4" onClick={clearFilters}>
              Clear filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} sizes={SHOP_SIZES} priority={i === 0} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
