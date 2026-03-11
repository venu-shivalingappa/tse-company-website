import { Link } from 'react-router';
import { Globe, Server, Cloud, Shield, CheckCircle2, ArrowRight, Building2 } from 'lucide-react';

export default function GlobalExpansion() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="mx-auto mb-6 text-blue-600" size={64} />
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Global Companies Expanding into India</h1>
            <p className="text-xl text-gray-600">Reliable technology infrastructure for international operations.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technology Infrastructure for International Expansion</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>International organizations expanding into India require reliable technology infrastructure, secure environments, and operational readiness.</p>
              <p>Tech Solve Engine supports global businesses establishing operations in India by providing comprehensive technology infrastructure and support services that ensure smooth market entry and operational excellence.</p>
              <p className="text-gray-900 font-medium">Our team ensures technology environments are aligned with both global standards and local operational requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Support Global Expansion</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Comprehensive technology services designed for international organizations entering the Indian market.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={16} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Partner with Tech Solve Engine?</h2>
              <div className="space-y-6">
                {whyTSE.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-12 rounded-lg">
              <Building2 className="text-blue-600 mb-6" size={64} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">From Day One to Long-Term Growth</h3>
              <p className="text-gray-600 mb-6">We understand the unique challenges of international expansion. Our approach ensures your technology infrastructure is ready from day one and scales with your business growth in India.</p>
              <p className="text-gray-600">Whether you're opening your first office or expanding to multiple locations, Tech Solve Engine provides the technology foundation you need.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Key Technology Considerations for India Expansion</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {considerations.map((item, index) => (
                <div key={index} className="bg-blue-700 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Expand into India?</h2>
          <p className="text-xl text-gray-600 mb-10">Let's discuss how we can support your technology infrastructure needs for India operations.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
            Talk to Our Experts
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

const services = [
  { icon: Server, title: 'Infrastructure Setup', description: 'Complete office technology infrastructure designed for reliability and growth.', details: ['Network infrastructure design and implementation', 'Office connectivity and wireless systems', 'Server and storage infrastructure', 'Multi-site connectivity architecture'] },
  { icon: Cloud, title: 'Cloud Environments', description: 'Cloud infrastructure aligned with global standards and local requirements.', details: ['Cloud architecture design', 'Hybrid cloud environments', 'Data residency compliance', 'Global-local connectivity optimization'] },
  { icon: Shield, title: 'Security & Compliance', description: 'Security frameworks meeting both international and local requirements.', details: ['Security architecture design', 'Compliance with Indian regulations', 'Data protection frameworks', 'Identity and access management'] },
  { icon: CheckCircle2, title: 'Operational Readiness', description: 'Ensuring technology environments are ready for business operations.', details: ['Technology deployment planning', 'User onboarding support', 'Managed operations services', 'Continuous support and optimization'] }
];

const whyTSE = [
  { title: 'Global Standards, Local Expertise', description: 'We understand both international best practices and local operational requirements in India.' },
  { title: 'End-to-End Support', description: 'From initial planning to ongoing operations, we provide comprehensive technology support.' },
  { title: 'Proven Track Record', description: 'Over 20 years of experience supporting organizations in India and understanding their unique needs.' },
  { title: 'Single Point of Contact', description: 'One trusted partner for all your technology infrastructure needs in India.' }
];

const considerations = [
  { title: 'Connectivity', description: 'Reliable connectivity between global headquarters and India operations is critical for seamless collaboration.' },
  { title: 'Data Residency', description: 'Understanding and complying with data localization and residency requirements in India.' },
  { title: 'Security Standards', description: 'Maintaining global security standards while meeting local compliance requirements.' },
  { title: 'Scalability', description: 'Infrastructure designed to scale as your India operations grow and expand to new locations.' },
  { title: 'Support Coverage', description: 'Local technology support aligned with your business hours and operational needs.' },
  { title: 'Cost Optimization', description: 'Right-sized infrastructure investments that balance capability with cost-effectiveness.' }
];
