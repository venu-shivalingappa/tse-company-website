import { Link } from 'react-router';
import { ArrowRight, Building2, TrendingUp, Wifi, Mail } from 'lucide-react';

export default function CaseStudies() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Case Studies</h1>
            <p className="text-xl text-gray-600">Real outcomes delivered through strategic technology architecture.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-600 transition-colors">
                <div className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <study.icon className="text-blue-600" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h2>
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Client Overview</h3>
                    <p className="text-gray-600">{study.client}</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Challenge</h3>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">TSE Approach</h3>
                    <p className="text-gray-600">{study.approach}</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <span className="text-blue-600 mt-1">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Business Impact</h3>
                    <p className="text-2xl font-bold text-blue-600">{study.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-10">Let's discuss how we can help achieve your technology goals.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
            Talk to Our Experts
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

const caseStudies = [
  {
    icon: Building2,
    title: 'Scaling Technology for a Rapidly Growing Startup',
    client: 'Oben Electric - Electric vehicle manufacturer',
    challenge: 'Early-stage startup experiencing rapid growth needed a scalable technology backbone to support expansion from initial operations to over 400 employees without disrupting business continuity.',
    approach: 'Designed and implemented a comprehensive technology architecture including infrastructure, cloud environments, security frameworks, and operational processes aligned with multi-year growth projections.',
    results: ['Supported seamless growth from startup to 400+ employees', 'Zero technology-related business disruptions during scaling', 'Established secure and compliant technology environment', 'Created scalable foundation for continued expansion'],
    impact: '400+ employees supported with zero disruption'
  },
  {
    icon: TrendingUp,
    title: 'Infrastructure Architecture Optimization',
    client: 'Growing enterprise organization',
    challenge: 'Organization was planning an ₹18L infrastructure investment based on vendor recommendations that would have been oversized and operationally complex for their actual needs.',
    approach: 'Conducted thorough requirements analysis, designed right-sized architecture aligned with actual business needs, and implemented cost-effective solution maintaining all required capabilities.',
    results: ['Reduced infrastructure investment from ₹18L to ₹2.5L', 'Maintained all required operational capabilities', 'Simplified operational complexity', 'Improved long-term maintainability'],
    impact: '86% cost reduction (₹15.5L saved)'
  },
  {
    icon: Wifi,
    title: 'Enterprise WiFi Network Transformation',
    client: 'Multi-site enterprise organization',
    challenge: 'Unreliable wireless infrastructure causing frequent connectivity issues, leading to significant productivity losses estimated at ₹11L annually in employee downtime and operational disruption.',
    approach: 'Redesigned complete wireless infrastructure with enterprise-grade access points, proper network segmentation, centralized management, and comprehensive coverage planning.',
    results: ['Eliminated productivity losses from connectivity issues', 'Improved employee satisfaction and operational efficiency', 'Established reliable infrastructure for future growth', 'Reduced IT support burden'],
    impact: '₹11L annual productivity loss eliminated'
  },
  {
    icon: Mail,
    title: 'Email Security Optimization',
    client: 'Security-conscious organization',
    challenge: 'Organization was paying premium prices for oversized email security solution that exceeded their actual requirements while creating operational complexity.',
    approach: 'Evaluated actual security requirements, designed appropriately-sized security architecture, and implemented cost-effective solution maintaining strong security posture.',
    results: ['Significant reduction in email security costs', 'Maintained robust security protection', 'Simplified operational management', 'Improved user experience'],
    impact: 'Substantial cost reduction with enhanced security'
  }
];
