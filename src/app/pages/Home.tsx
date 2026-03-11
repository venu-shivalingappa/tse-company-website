import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  Target, 
  Network, 
  Cloud, 
  Shield, 
  Cpu, 
  Settings, 
  FileCheck,
  ArrowRight,
  CheckCircle2,
  Globe,
  Sparkles,
  Zap
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-100 mb-6 backdrop-blur-sm"
              >
                <Sparkles size={16} />
                <span className="text-sm font-medium">20+ Years of Engineering Excellence</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Strategic Technology
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Partner
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-blue-100 mb-8 leading-relaxed"
              >
                We design, build, secure, and operate the technology backbone that enables businesses to scale confidently.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg font-medium"
                >
                  Talk to Our Experts
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white/30 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all text-lg font-medium"
                >
                  View Case Studies
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20"
              >
                {[
                  { label: 'Years Experience', value: '20+' },
                  { label: 'Uptime', value: '99.9%' },
                  { label: 'Cost Savings', value: '86%' }
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1616386261012-8a328c89d5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Modern Technology Workspace"
                  className="rounded-2xl shadow-2xl border border-white/10"
                />
              </motion.div>
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Secure &amp; Compliant</div>
                  <div className="text-sm text-gray-600">ISO 27001 Ready</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-2xl p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Zap className="text-blue-600" size={24} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Fast Deployment</div>
                  <div className="text-sm text-gray-600">3-5 Year Architecture</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Growing Businesses and Global Organizations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tech Solve Engine has spent over two decades refining the engineering discipline required to build reliable technology environments for modern organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['20+ Years Engineering Experience', 'Long-Term Client Partnerships', 'Architecture Designed for Scalability', 'Supporting Businesses in India and Globally'].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex items-start gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-900 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Technology is the backbone of every modern business. Tech Solve Engine helps organizations design, build, secure, and operate the technology environments required to support growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg"
                >
                  <service.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Infrastructure Technology"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Approach</h2>
              <p className="text-lg text-gray-600 mb-8">
                Technology decisions impact every part of a business. At Tech Solve Engine, we follow a disciplined approach to ensure technology environments are designed to support long-term business growth.
              </p>

              <div className="space-y-4">
                {approachSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                <p className="text-lg font-medium text-blue-900">
                  Our architecture is designed to support 3–5 years of business growth without disrupting operations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Results from Real Organizations</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudiesPreview.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group"
                >
                  Read Case Study
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
            >
              View All Case Studies
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Security &amp; Compliance Expertise</h2>
              <p className="text-lg text-gray-600 mb-8">
                Security must be built into the architecture of every technology environment. Tech Solve Engine designs secure technology infrastructures aligned with global security frameworks and governance models.
              </p>
              <div className="space-y-4 mb-8">
                {['Security architecture', 'Risk management frameworks', 'ISO 27001 readiness support', 'Security governance implementation'].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-blue-600 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-gray-500 italic bg-slate-50 p-4 rounded-lg border border-slate-200">
                Tech Solve Engine has applied for accreditation with the National Accreditation Board for Certification Bodies (NABCB) to operate as an ISO/IEC 27001 certification body in India.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1639503547276-90230c4a4198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Cybersecurity"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <Shield className="mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-2">Built on Global Security Standards</h3>
                  <p className="text-blue-100">Ensuring your technology meets the highest standards of protection</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Expansion Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Globe className="mb-6" size={64} />
              <h2 className="text-4xl font-bold mb-6">Helping Global Companies Build Technology Operations in India</h2>
              <p className="text-xl text-blue-100 mb-8">International organizations expanding into India require reliable technology infrastructure, secure environments, and operational readiness.</p>
              <ul className="space-y-3 mb-8">
                {['Infrastructure setup', 'Cloud environments', 'Security and compliance support', 'Operational technology management'].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link
                to="/global-expansion"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium shadow-lg hover:shadow-xl"
              >
                Learn More
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1567619863607-cb9e8f595a95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Global Business Network"
                className="rounded-2xl shadow-2xl border border-white/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why TSE Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Tech Solve Engine</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Organizations choose Tech Solve Engine because we approach technology differently.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyTSE.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <item.icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Build Your Technology Backbone with Confidence</h2>
          <p className="text-xl text-gray-300 mb-10">Work with Tech Solve Engine to design and operate technology environments that support long-term business growth.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all text-lg font-medium shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
          >
            Talk to Our Experts
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

const services = [
  { icon: Target, title: 'Technology Strategy', description: 'Aligning technology architecture with business goals to ensure long-term scalability and operational stability.' },
  { icon: Network, title: 'Infrastructure & Networking', description: 'Designing reliable enterprise infrastructure and network environments that support secure and uninterrupted operations.' },
  { icon: Cloud, title: 'Cloud Engineering', description: 'Building modern cloud environments that provide flexibility, scalability, and performance.' },
  { icon: Shield, title: 'Cybersecurity', description: 'Protecting technology environments through secure architecture, governance frameworks, and proactive risk management.' },
  { icon: Cpu, title: 'DevOps', description: 'Improving operational efficiency through automation, CI/CD pipelines, and infrastructure-as-code.' },
  { icon: Settings, title: 'Managed Technology Operations', description: 'Operating and maintaining critical technology environments to ensure reliability, security, and continuous improvement.' },
  { icon: FileCheck, title: 'Information Security & Compliance', description: 'Helping organizations implement security governance aligned with global frameworks including ISO/IEC 27001.' }
];

const approachSteps = [
  { title: 'Business Vision', description: 'Understanding business objectives, growth plans, and operational requirements.' },
  { title: 'Technology Strategy', description: 'Defining the technology roadmap aligned with business needs.' },
  { title: 'Architecture Design', description: 'Designing infrastructure, cloud, and security architecture for long-term scalability.' },
  { title: 'Engineering Deployment', description: 'Implementing solutions with engineering discipline and operational readiness.' },
  { title: 'Security & Governance', description: 'Ensuring technology environments are secure, compliant, and resilient.' },
  { title: 'Managed Operations', description: 'Supporting and evolving the environment to maintain performance and reliability.' }
];

const caseStudiesPreview = [
  { title: 'Scaling Technology for a Rapidly Growing Startup', description: 'Designed the technology backbone for Oben Electric, supporting growth from early-stage operations to a company with over 400 employees.' },
  { title: 'Infrastructure Architecture Optimization', description: 'Replaced a proposed ₹18L infrastructure investment with a streamlined ₹2.5L architecture delivering the same operational capability.' },
  { title: 'Enterprise WiFi Network Transformation', description: 'Redesigned enterprise wireless infrastructure, eliminating productivity losses and improving operational stability.' },
  { title: 'Email Security Optimization', description: 'Reduced security infrastructure costs while improving operational efficiency and security posture.' }
];

const whyTSE = [
  { icon: Target, title: 'Business + Technology Understanding', description: 'We align technology decisions with business objectives.' },
  { icon: Cpu, title: 'Engineering-First Mindset', description: 'Our solutions are built on disciplined engineering principles.' },
  { icon: Network, title: 'Architecture for Long-Term Scale', description: 'We design systems to support long-term growth.' },
  { icon: CheckCircle2, title: 'Trusted Partnerships', description: 'Many clients continue working with us for over a decade.' }
];
