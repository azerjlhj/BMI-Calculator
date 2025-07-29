# BMI Calculator

A comprehensive Body Mass Index (BMI) calculator with dual unit system support and age-appropriate health guidance. Built with vanilla JavaScript, HTML5, and CSS3.

## 🎯 Features

### Core Functionality
- **Dual Unit Systems**: US Customary (pounds/inches) and Metric (kg/cm)
- **Age-appropriate results**: Different guidance for children/teens vs adults
- **Gender-specific calculations**: Required for accurate BMI interpretation
- **Input validation**: Comprehensive error checking for all fields
- **CDC Chart Integration**: Direct links to official growth charts for users ≤20

### Smart Features
- **Dynamic placeholders**: Updates based on selected unit system
- **Automatic unit conversion**: Converts cm to meters for metric calculations
- **Button state management**: Disables active unit button to prevent confusion
- **Form clearing**: Resets weight/height when switching unit systems
- **Age validation**: Accepts ages 2-120 with appropriate error handling

## 🚀 Live Demo

🔗 [Try the BMI Calculator](https://azerjlhj.github.io/BMI-Calculator/)

## 🛠️ Technologies Used

- **HTML5** - Semantic form structure and accessibility
- **CSS3** - Responsive design with flexbox layout
- **Vanilla JavaScript** - BMI calculations, form validation, DOM manipulation

## 📊 BMI Categories (Adults 21+)

| BMI Range | Category |
|-----------|----------|
| < 18.5 | Underweight |
| 18.5 - 24.9 | Healthy Weight |
| 25.0 - 29.9 | Overweight |
| ≥ 30.0 | Obese |

## 👶 Children & Teens (Ages 2-20)

For users 20 and under, the calculator:
- Displays calculated BMI value
- Redirects to CDC BMI-for-age growth charts
- Uses gender-specific charts for accurate percentile interpretation

## 🔧 Key Technical Features

- **Smart constant switching**: 703 for US units, 1 for metric calculations
- **Precise conversions**: cm → meters for metric BMI formula
- **Input sanitization**: parseFloat() validation for numeric inputs
- **External resource integration**: Direct links to official CDC charts
- **Error handling**: Comprehensive validation with user-friendly alerts

## 📥 Installation

```bash
git clone https://github.com/yourusername/bmi-calculator.git
cd bmi-calculator
open index.html
```

## 💡 Usage

1. **Select unit system**: Choose between US Customary or Metric
2. **Enter personal information**: Age, gender, weight, and height
3. **Calculate BMI**: Click "Calculate" for instant results
4. **Review guidance**: Receive age-appropriate health recommendations

## 📱 Responsive Design

Fully responsive design works seamlessly across:
- Desktop computers
- Tablets
- Mobile devices

---

*Built with health and wellness in mind* ❤️
