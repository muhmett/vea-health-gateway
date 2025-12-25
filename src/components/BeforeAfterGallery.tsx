import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import beforeSmile1 from "@/assets/before-smile-1.jpg";
import afterSmile1 from "@/assets/after-smile-1.jpg";
import beforeSmile2 from "@/assets/before-smile-2.jpg";
import afterSmile2 from "@/assets/after-smile-2.jpg";
import beforeSmile3 from "@/assets/before-smile-3.jpg";
import afterSmile3 from "@/assets/after-smile-3.jpg";
import beforeSmile4 from "@/assets/before-smile-4.jpg";
import afterSmile4 from "@/assets/after-smile-4.jpg";
import beforeSmile5 from "@/assets/before-smile-5.jpg";
import afterSmile5 from "@/assets/after-smile-5.jpg";
import beforeSmile6 from "@/assets/before-smile-6.jpg";
import afterSmile6 from "@/assets/after-smile-6.jpg";
import beforeSmile7 from "@/assets/before-smile-7.jpg";
import afterSmile7 from "@/assets/after-smile-7.jpg";
import beforeHair1 from "@/assets/before-hair-1.jpg";
import afterHair1 from "@/assets/after-hair-1.jpg";
import beforeHair2 from "@/assets/before-hair-2.jpg";
import afterHair2 from "@/assets/after-hair-2.jpg";

const transformations = [
  // HOLLYWOOD SMILE - SMILE 1
  {
    id: 1,
    category: "smile",
    title: "Hollywood Smile",
    before: beforeSmile1,
    after: afterSmile1,
    description: "Full Smile Makeover - 20 Porcelain Veneers",
    patient: "Patient from Saudi Arabia",
    duration: "Immediate results",
    technique: "Porcelain Veneers",
    veneers: 20,
    age: 35,
    popular: true,
  },
  
  // HOLLYWOOD SMILE - SMILE 2
  {
    id: 2,
    category: "smile",
    title: "Hollywood Smile",
    before: beforeSmile2,
    after: afterSmile2,
    description: "Smile Design - 16 Zirconium Crowns",
    patient: "Patient from UAE",
    duration: "5 days treatment",
    technique: "Zirconium Crowns",
    crowns: 16,
    age: 41,
    popular: false,
  },
  
  // HOLLYWOOD SMILE - SMILE 3
  {
    id: 3,
    category: "smile",
    title: "Hollywood Smile",
    before: beforeSmile3,
    after: afterSmile3,
    description: "Teeth Whitening + 8 Veneers",
    patient: "Patient from Kuwait",
    duration: "3 days treatment",
    technique: "Veneers + Whitening",
    veneers: 8,
    age: 29,
    popular: true,
  },
  
  // HOLLYWOOD SMILE - SMILE 4
  {
    id: 4,
    category: "smile",
    title: "Hollywood Smile",
    before: beforeSmile4,
    after: afterSmile4,
    description: "Gap Closure - 12 Composite Veneers",
    patient: "Patient from Qatar",
    duration: "2 days treatment",
    technique: "Composite Veneers",
    veneers: 12,
    age: 32,
    popular: false,
  },
  
  // HOLLYWOOD SMILE - SMILE 5
  {
    id: 5,
    category: "smile",
    title: "Hollywood Smile",
    before: beforeSmile5,
    after: afterSmile5,
    description: "Smile Alignment - 18 Veneers",
    patient: "Patient from Oman",
    duration: "6 days treatment",
    technique: "Porcelain Veneers",
    veneers: 18,
    age: 45,
    popular: true,
  },
  
  // HOLLYWOOD SMILE - SMILE 6
  {
    id: 6,
    category: "smile",
    title: "Hollywood Smile",
    before: beforeSmile6,
    after: afterSmile6,
    description: "Discoloration Treatment - 14 Veneers",
    patient: "Patient from Bahrain",
    duration: "4 days treatment",
    technique: "E-max Veneers",
    veneers: 14,
    age: 37,
    popular: false,
  },
  
  // HOLLYWOOD SMILE - SMILE 7
  {
    id: 7,
    category: "smile",
    title: "Hollywood Smile",
    before: beforeSmile7,
    after: afterSmile7,
    description: "Complete Smile Restoration - 24 Veneers",
    patient: "Patient from Germany",
    duration: "7 days treatment",
    technique: "Full Porcelain",
    veneers: 24,
    age: 50,
    popular: true,
  },
  
  // HAIR TRANSPLANT - HAIR 1
  {
    id: 8,
    category: "hair",
    title: "Hair Transplant",
    before: beforeHair1,
    after: afterHair1,
    description: "FUE Technique - 3500 grafts",
    patient: "Patient from UK",
    duration: "Results after 8 months",
    technique: "FUE",
    grafts: 3500,
    age: 42,
    popular: true,
  },
  
  // HAIR TRANSPLANT - HAIR 2
  {
    id: 9,
    category: "hair",
    title: "Hair Transplant",
    before: beforeHair2,
    after: afterHair2,
    description: "DHI Technique - 4000 grafts",
    patient: "Patient from France",
    duration: "Results after 10 months",
    technique: "DHI",
    grafts: 4000,
    age: 38,
    popular: true,
  }
];


interface BeforeAfterSliderProps {
  before: string;
  after: string;
}

const BeforeAfterSlider = ({ before, after }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <div
      className="relative w-full aspect-square rounded-2xl overflow-hidden cursor-ew-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <img
        src={after}
        alt="After treatment"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={before}
          alt="Before treatment"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-elevated flex items-center justify-center">
          <div className="flex items-center gap-0.5">
            <ChevronLeft className="w-4 h-4 text-primary" />
            <ChevronRight className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-secondary/90 text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
        After
      </div>
    </div>
  );
};

const BeforeAfterGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Hair Transplant", "Hollywood Smile"];

  const filteredTransformations =
    activeCategory === "All"
      ? transformations
      : transformations.filter((t) => t.category === activeCategory);

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === filteredTransformations.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? filteredTransformations.length - 1 : prev - 1
    );
  };

  // Reset active index when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setActiveIndex(0);
  };

  return (
    <section id="gallery" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Real Results
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Before & After Gallery
          </h2>
          <p className="text-muted-foreground text-lg">
            See the incredible transformations our patients have experienced.
            Drag the slider to compare before and after results.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => handleCategoryChange(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Content */}
        {filteredTransformations.length > 0 && (
          <div className="max-w-2xl mx-auto">
            {/* Main Slider */}
            <div className="relative">
              <BeforeAfterSlider
                before={filteredTransformations[activeIndex].before}
                after={filteredTransformations[activeIndex].after}
              />

              {/* Navigation Arrows */}
              {filteredTransformations.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-elevated hover:bg-card transition-colors z-10"
                    aria-label="Previous transformation"
                  >
                    <ChevronLeft className="w-6 h-6 text-foreground" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-elevated hover:bg-card transition-colors z-10"
                    aria-label="Next transformation"
                  >
                    <ChevronRight className="w-6 h-6 text-foreground" />
                  </button>
                </>
              )}
            </div>

            {/* Info Card */}
            <div className="mt-6 text-center">
              <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-3">
                {filteredTransformations[activeIndex].category}
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                {filteredTransformations[activeIndex].description}
              </h3>
              <p className="text-muted-foreground">
                {filteredTransformations[activeIndex].patient}
              </p>
            </div>

            {/* Dots Indicator */}
            {filteredTransformations.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {filteredTransformations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-primary w-8"
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to transformation ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to start your transformation journey?
          </p>
          <a
            href="https://wa.me/905314329215"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="premium" size="lg">
              Get Your Free Consultation
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
