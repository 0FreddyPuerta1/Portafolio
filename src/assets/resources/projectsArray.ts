import { ProjectProps } from "@/interfaces/ProjectProps";
import ticketPrinter from "../images/projects/ticketprinter.png";
import sistemaRemisiones from "../images/projects/puntoventa.png";
import alixProject from "../images/projects/alixProject.png";
export const projectsArray: ProjectProps[] = [
  {
    en: {
      title: "TicketPrinter",
      description:
        "This project was developed for a leading company in the meat industry, aimed at optimizing their operations through precision and automation. The company required a robust solution to print detailed tickets containing crucial information about cattle prior to slaughter, such as customer details, slaughter number, weight, and more. Our software seamlessly integrates with the company's existing infrastructure by connecting to a scale via a serial port, automatically capturing weight data. Additionally, it empowers users to input essential information through an intuitive form interface. The final output is a professionally formatted ticket, which is instantly printed using a POS printer—be it laser, thermal, or dot matrix—ensuring accuracy, speed, and compliance with industry standards.",
      technologies: [
        {
          name: "Electron",
          path: "../electron",
          key: 1,
        },
      ],
      imagePath: ticketPrinter.src,
      videoUrl: "https://www.youtube.com/shorts/YiStkmbl_f0",
    },
    es: {
      title: "TicketPrinter",
      description:
        "Este proyecto fue desarrollado para una empresa líder en la industria cárnica, con el objetivo de optimizar sus operaciones mediante precisión y automatización. La empresa requería una solución robusta para imprimir tickets detallados con información crucial sobre los bovinos antes de su sacrificio, como datos del cliente, número de sacrificio, peso, entre otros. Nuestro software se integra perfectamente con la infraestructura existente de la empresa, conectándose a una báscula a través de un puerto serial y capturando automáticamente los datos de peso. Además, permite a los usuarios ingresar información esencial a través de una interfaz de formulario intuitiva. El resultado final es un ticket profesionalmente formateado, que se imprime instantáneamente utilizando una impresora POS—ya sea láser, térmica o de punto—asegurando precisión, velocidad y cumplimiento con los estándares de la industria.",
      technologies: [
        {
          name: "Electron",
          path: "../electron",
          key: 1,
        },
      ],
      imagePath: ticketPrinter.src,
      videoUrl: "https://www.youtube.com/shorts/YiStkmbl_f0",
    },
  },
  {
    en: {
      title: "Remission System",
      description:
        "This is an integrated remission management system designed to automate the process of assigning products to employees, who can request them through the company payroll. The system can read data directly from a scale connected via a serial port, facilitating the sale of products by weight. It also supports the sale of pre-packaged products sold by unit. The platform is optimized to integrate with databases, allowing efficient employee search and product selection. As products are added to the 'cart', the system displays detailed information such as unit price or per kilogram, VAT, healthy tax, subtotal, and total. Once the product selection is completed, the remission is stored in the database, and a receipt is printed via a POS printer. Additionally, the system offers advanced features such as creating and updating products, receipt reprinting, and solid stock control, ensuring accurate and reliable inventory management. This project reflects a comprehensive and professional approach to developing business solutions.",
      technologies: [
        {
          name: "Electron",
          path: "../electron",
          key: 1,
        },
      ],
      imagePath: sistemaRemisiones.src,
      videoUrl: "https://www.youtube.com/watch?v=owHazNB0n58",
    },
    es: {
      title: "Sistema de Remisiones",
      description:
        "Este proyecto es un sistema integral de gestión de remisiones diseñado para automatizar el proceso de asignación de productos a empleados, quienes pueden solicitarlos a través de nómina en la empresa. El sistema cuenta con la capacidad de leer datos directamente desde una báscula conectada por puerto serial, facilitando la venta de productos al peso. También soporta la venta de productos preempacados que se comercializan por unidad. La plataforma está optimizada para integrarse con bases de datos, permitiendo la búsqueda eficiente de empleados y la selección de productos. A medida que se añaden productos al 'carrito', el sistema muestra detalladamente información relevante como el precio unitario o por kilogramo, IVA, impuesto saludable, subtotal y total. Una vez completada la selección de productos, la remisión se almacena en la base de datos y se genera un recibo impreso a través de una impresora POS. Adicionalmente, el sistema ofrece funcionalidades avanzadas como la creación y actualización de productos, reimpresión de recibos, y un sólido control de stock, garantizando una gestión precisa y confiable del inventario. Este proyecto refleja un enfoque completo y profesional en el desarrollo de soluciones empresariales.",
      technologies: [
        {
          name: "Electron",
          path: "../electron",
          key: 1,
        },
      ],
      imagePath: sistemaRemisiones.src,
      videoUrl: "https://www.youtube.com/watch?v=owHazNB0n58",
    },
  },
  {
    en: {
      title: "Administrative Management System",
      description:
        "This system is developed for the Human Resources department of a company, enabling comprehensive management of employees. It allows for onboarding, offboarding, data updates, association of minor dependents, management of employment history, registration of visits to the occupational health doctor, occupational medical history, absenteeism tracking, and more. Additionally, it provides features such as the generation of employment letters in PDF format, report generation, and a dashboard for visual analytics.",
      technologies: [
        {
          name: "Electron",
          path: "../electron",
          key: 1,
        },
      ],
      imagePath: alixProject.src,
      videoUrl: "https://www.youtube.com/watch?v=D_6qCAEBisw",
    },
    es: {
      title: "Sistema de Gestión Administrativa",
      description:
        "Este sistema está desarrollado para el departamento de Recursos Humanos de una empresa, permitiendo la gestión integral de colaboradores. Facilita la vinculación y desvinculación de empleados, actualización de datos, asociación de hijos menores de edad, gestión del historial laboral, registro de visitas al médico laboral, historia clínica ocupacional, seguimiento de ausentismo, entre otras funciones. Además, ofrece la generación de cartas laborales en formato PDF, generación de informes y un dashboard para análisis visual.",
      technologies: [
        {
          name: "Electron",
          path: "../electron",
          key: 1,
        },
      ],
      imagePath: alixProject.src,
      videoUrl: "https://www.youtube.com/watch?v=D_6qCAEBisw",
    },
  },
];
