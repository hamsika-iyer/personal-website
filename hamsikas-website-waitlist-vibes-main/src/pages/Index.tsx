import { Mail, ArrowDown, Cat, PenTool, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
const Index = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:hamsikaiyer.work@gmail.com";
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header Status */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm border">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available for new projects
          </div>
          
        </div>

        {/* Main Content */}
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
              Hello! I'm{" "}
              <span className="font-medium bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Hamsika Iyer
              </span>
              , a product designer with 3 and half years of experience working with{" "}
              <span className="italic">FinTechs and Banks</span>
            </h1>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 py-8">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer shadow-sm border">
              <Cat className="w-6 h-6 text-gray-600" />
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer shadow-sm border">
              <PenTool className="w-6 h-6 text-gray-600" />
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer shadow-sm border">
              <Building2 className="w-6 h-6 text-gray-600" />
            </div>
          </div>

          {/* Discover Section */}
          <div className="space-y-4">
            <p className="text-gray-600 max-w-md mx-auto leading-relaxed">This is supposed to be my personal website. I got the domain, but I haven't gotten enough motivation to sit down and actually build one.</p>
            
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <span>Until then</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>
          </div>

          {/* Email CTA */}
          <div className="pt-8">
            <Button onClick={handleEmailClick} className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
              <Mail className="w-4 h-4 mr-2" />
              Reach out via email
            </Button>
            <p className="text-xs text-gray-500 mt-3">
              hamsikaiyer.work@gmail.com
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-xs text-gray-400">
          <p>© 2024 Hamsika Iyer • Coming Soon</p>
        </div>
      </div>
    </div>;
};
export default Index;