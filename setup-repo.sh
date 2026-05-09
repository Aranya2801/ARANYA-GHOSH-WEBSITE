#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────
# setup-repo.sh — GATE Notes Local Setup
# Aranya Ghosh · github.com/Aranya2801/ARANYA-GHOSH-GATE-NOTES-
# ─────────────────────────────────────────────────────────
set -euo pipefail

GREEN='\033[0;32m'
AMBER='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo ""
echo -e "${AMBER}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${AMBER}  GATE Notes — Setup Script${NC}"
echo -e "${AMBER}  Aranya Ghosh · AIR 3 DA · AIR 147 CS · GATE 2026${NC}"
echo -e "${AMBER}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# ── 1. Create directory structure ────────────────────────
echo -e "${BLUE}[1/4] Creating directory structure...${NC}"

SUBJECTS=("Mathematics" "Algorithms" "OperatingSystems" "DBMS" "ComputerNetworks" "MachineLearning")
SUBDIRS=("notes" "practice" "summary")

for subject in "${SUBJECTS[@]}"; do
  for subdir in "${SUBDIRS[@]}"; do
    mkdir -p "$subject/$subdir"
  done
done

mkdir -p PreviousYearQuestions/CS PreviousYearQuestions/DA
mkdir -p FormulaSheets
mkdir -p Resources
mkdir -p templates

echo -e "${GREEN}  ✓ Directory structure created${NC}"

# ── 2. Create stub note files ─────────────────────────────
echo -e "${BLUE}[2/4] Creating note stub files...${NC}"

declare -A TOPIC_FILES=(
  ["Mathematics/notes/linear-algebra.md"]="Linear Algebra"
  ["Mathematics/notes/eigenvalues.md"]="Eigenvalues & Diagonalization"
  ["Mathematics/notes/calculus.md"]="Calculus — Single & Multivariable"
  ["Mathematics/notes/probability.md"]="Probability Theory"
  ["Mathematics/notes/statistics-for-ml.md"]="Statistics for ML"
  ["Mathematics/notes/discrete-math.md"]="Discrete Mathematics"
  ["Algorithms/notes/sorting.md"]="Sorting Algorithms"
  ["Algorithms/notes/dynamic-programming.md"]="Dynamic Programming"
  ["Algorithms/notes/graphs.md"]="Graph Algorithms"
  ["Algorithms/notes/divide-conquer.md"]="Divide & Conquer"
  ["Algorithms/notes/trees-heaps.md"]="Trees & Heaps"
  ["Algorithms/notes/hashing.md"]="Hashing"
  ["Algorithms/notes/np-completeness.md"]="NP-Completeness"
  ["Algorithms/notes/amortized.md"]="Amortized Analysis"
  ["OperatingSystems/notes/processes.md"]="Processes & Threads"
  ["OperatingSystems/notes/scheduling.md"]="CPU Scheduling"
  ["OperatingSystems/notes/synchronization.md"]="Synchronization"
  ["OperatingSystems/notes/deadlocks.md"]="Deadlocks"
  ["OperatingSystems/notes/memory.md"]="Memory Management"
  ["OperatingSystems/notes/filesystems.md"]="File Systems"
  ["DBMS/notes/relational-model.md"]="Relational Model & Algebra"
  ["DBMS/notes/sql.md"]="SQL — Complete Reference"
  ["DBMS/notes/normalization.md"]="Normalization"
  ["DBMS/notes/transactions.md"]="Transactions & ACID"
  ["DBMS/notes/concurrency.md"]="Concurrency Control"
  ["DBMS/notes/indexing.md"]="Indexing & B-Trees"
  ["ComputerNetworks/notes/models.md"]="OSI & TCP/IP Models"
  ["ComputerNetworks/notes/data-link.md"]="Data Link Layer"
  ["ComputerNetworks/notes/routing.md"]="Routing Algorithms"
  ["ComputerNetworks/notes/transport.md"]="TCP & UDP"
  ["ComputerNetworks/notes/application.md"]="Application Layer"
  ["ComputerNetworks/notes/security.md"]="Network Security"
  ["MachineLearning/notes/linear-models.md"]="Linear & Logistic Regression"
  ["MachineLearning/notes/trees-ensembles.md"]="Decision Trees & Ensembles"
  ["MachineLearning/notes/svm.md"]="Support Vector Machines"
  ["MachineLearning/notes/neural-nets.md"]="Neural Networks & Deep Learning"
  ["MachineLearning/notes/clustering.md"]="Clustering"
  ["MachineLearning/notes/dimensionality.md"]="Dimensionality Reduction"
  ["MachineLearning/notes/bias-variance.md"]="Bias-Variance & Regularization"
  ["MachineLearning/notes/bayesian.md"]="Bayesian Methods"
)

TEMPLATE_CONTENT=$(cat templates/note-template.md 2>/dev/null || echo "# Topic\n\n*Notes coming soon. See note-template.md for the format.*")

created=0
for file in "${!TOPIC_FILES[@]}"; do
  if [ ! -f "$file" ]; then
    topic="${TOPIC_FILES[$file]}"
    echo "# $topic" > "$file"
    echo "" >> "$file"
    echo "> *Notes in progress. Follow the template in \`templates/note-template.md\`.*" >> "$file"
    echo "" >> "$file"
    echo "---" >> "$file"
    echo "" >> "$file"
    echo "## Overview" >> "$file"
    echo "" >> "$file"
    echo "Content for **$topic** will cover:" >> "$file"
    echo "" >> "$file"
    echo "- Core definitions and theory" >> "$file"
    echo "- Key formulas and derivations" >> "$file"
    echo "- GATE-specific patterns" >> "$file"
    echo "- Worked examples" >> "$file"
    echo "- Practice problems" >> "$file"
    ((created++)) || true
  fi
done

echo -e "${GREEN}  ✓ Created $created note stub files${NC}"

# ── 3. Create PYQ analysis stubs ─────────────────────────
echo -e "${BLUE}[3/4] Creating PYQ structure...${NC}"

for paper in CS DA; do
  for year in 2026 2025 2024 2023 2022; do
    mkdir -p "PreviousYearQuestions/$paper/$year"
    stub="PreviousYearQuestions/$paper/$year/README.md"
    if [ ! -f "$stub" ]; then
      echo "# GATE $year — $paper Paper" > "$stub"
      echo "" >> "$stub"
      echo "*Questions and solutions for GATE $year $paper will be organized here.*" >> "$stub"
      echo "" >> "$stub"
      echo "## Topics Covered" >> "$stub"
      echo "" >> "$stub"
      echo "*(Fill in after solving the paper)*" >> "$stub"
    fi
  done

  analysis="PreviousYearQuestions/$paper/analysis.md"
  if [ ! -f "$analysis" ]; then
    cat > "$analysis" << EOF
# GATE $paper — Topic-wise PYQ Analysis (2022–2026)

## Frequency Table

| Topic | 2022 | 2023 | 2024 | 2025 | 2026 | Total Marks |
|-------|------|------|------|------|------|-------------|
| Linear Algebra | | | | | | |
| Probability | | | | | | |
| Algorithms — DP | | | | | | |
| Graph Algorithms | | | | | | |
| OS — Scheduling | | | | | | |
| OS — Deadlocks | | | | | | |
| DBMS — SQL | | | | | | |
| DBMS — Normalization | | | | | | |
| Networks — TCP | | | | | | |
| Machine Learning | | | | | | |

## Observations

*(Fill in after analyzing each year's paper)*

## High-Priority Topics for Next Attempt

*(Based on frequency analysis)*
EOF
  fi
done

echo -e "${GREEN}  ✓ PYQ structure ready${NC}"

# ── 4. Create formula sheet stubs ────────────────────────
echo -e "${BLUE}[4/4] Creating formula sheet stubs...${NC}"

declare -A FORMULA_FILES=(
  ["FormulaSheets/mathematics-formulas.md"]="Mathematics"
  ["FormulaSheets/algorithms-complexity.md"]="Algorithms & Complexity"
  ["FormulaSheets/ml-formulas.md"]="Machine Learning"
  ["FormulaSheets/os-formulas.md"]="Operating Systems"
  ["FormulaSheets/dbms-formulas.md"]="DBMS"
  ["FormulaSheets/networks-formulas.md"]="Computer Networks"
)

for file in "${!FORMULA_FILES[@]}"; do
  subject="${FORMULA_FILES[$file]}"
  if [ ! -f "$file" ]; then
    cat > "$file" << EOF
# Formula Sheet — $subject

> **Usage**: Use this sheet for weekly revision and final exam prep.  
> Do NOT look at this during first-pass study — derive formulas yourself first.

---

## Key Formulas

| Name | Formula | Conditions |
|------|---------|------------|
| | | |

---

## Complexity Reference

| Problem/Algorithm | Time | Space | Notes |
|------------------|------|-------|-------|
| | | | |

---

*Last updated: $(date +%Y-%m-%d)*
EOF
  fi
done

echo -e "${GREEN}  ✓ Formula sheet stubs created${NC}"

# ── Summary ───────────────────────────────────────────────
echo ""
echo -e "${AMBER}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}  ✓ Setup complete!${NC}"
echo ""
echo -e "  ${BLUE}Open the interactive notes:${NC}"
echo -e "  → Open index.html in your browser"
echo ""
echo -e "  ${BLUE}Serve locally (optional):${NC}"
echo -e "  → python3 -m http.server 8080"
echo -e "  → Then visit http://localhost:8080"
echo ""
echo -e "  ${BLUE}Start contributing:${NC}"
echo -e "  → See templates/note-template.md for format"
echo -e "  → Pick any stub file and start writing"
echo ""
echo -e "${AMBER}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
