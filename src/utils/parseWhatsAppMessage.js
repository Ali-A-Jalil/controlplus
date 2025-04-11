    export function parseWhatsAppMessage(message) {
        const lines = message.split("\n");
        const lead = {};
    
        lines.forEach((line) => {
        if (line.includes("الاسم:")) lead.name = line.split("الاسم:")[1].trim();
        if (line.includes("رقم الهاتف:")) lead.phone = line.split("رقم الهاتف:")[1].trim();
        if (line.includes("رقم الباسبور:") || line.includes("ID:")) {
            lead.passportNumber = line.split(":")[1].trim();
        }
        if (line.includes("الإيميل:")) lead.email = line.split("الإيميل:")[1].trim();
        if (line.includes("نوع الإقامة:")) lead.residencyType = line.split("نوع الإقامة:")[1].trim();
        if (line.includes("من تاريخ:")) lead.residencyFrom = line.split("من تاريخ:")[1].trim();
        if (line.includes("إلى تاريخ:")) lead.residencyTo = line.split("إلى تاريخ:")[1].trim();
        if (line.includes("نوع الخدمة:")) lead.service = line.split("نوع الخدمة:")[1].trim();
        if (line.includes("الدولة:")) lead.country = line.split("الدولة:")[1].trim();
        });
    
        return lead;
    }
    