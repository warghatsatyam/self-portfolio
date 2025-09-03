# Bank of America Interview Preparation Plan
## 30-Day Python & Database Focused Prep

---

## Week 1-2: Python Fundamentals Deep Dive

### Core Python Topics to Master

#### Day 1-3: Data Structures & Collections
- **Lists, Tuples, Sets, Dictionaries**
  - Time complexity of operations
  - When to use each structure
  - Memory implications
- **Collections Module**
  - defaultdict, Counter, OrderedDict
  - deque, namedtuple
  - ChainMap, UserDict

#### Day 4-6: Python Internals
- **Memory Management**
  - Reference counting
  - Garbage collection
  - Memory profiling
- **GIL (Global Interpreter Lock)**
  - What it is and implications
  - Working around GIL limitations
- **Python Data Model**
  - Magic methods (__init__, __str__, __repr__)
  - Descriptor protocol
  - Property decorators

#### Day 7-9: Advanced Python Features
- **Decorators**
  - Function decorators
  - Class decorators
  - Decorator with arguments
- **Generators & Iterators**
  - yield keyword
  - Generator expressions
  - iter() and next()
- **Context Managers**
  - with statement
  - contextlib module
  - Custom context managers

#### Day 10-12: OOP & Design Patterns
- **SOLID Principles in Python**
- **Common Design Patterns**
  - Singleton, Factory, Observer
  - Strategy, Decorator, Adapter
- **Metaclasses**
- **Abstract Base Classes (ABC)**

#### Day 13-14: Python Performance
- **Profiling & Optimization**
  - cProfile, timeit
  - Big O notation in Python context
- **Concurrent Programming**
  - threading vs multiprocessing
  - asyncio basics
  - concurrent.futures

### Daily Practice Problems (Week 1-2)

```python
# Example Problems to Solve Daily

# 1. Implement a LRU Cache using OrderedDict
class LRUCache:
    def __init__(self, capacity):
        pass
    
    def get(self, key):
        pass
    
    def put(self, key, value):
        pass

# 2. Create a custom iterator for Fibonacci sequence
class FibonacciIterator:
    def __init__(self, max_count):
        pass
    
    def __iter__(self):
        pass
    
    def __next__(self):
        pass

# 3. Implement a thread-safe singleton pattern
class Singleton:
    pass

# 4. Write a decorator that retries a function n times
def retry(n_times):
    pass

# 5. Implement a context manager for database connections
class DatabaseConnection:
    pass
```

---

## Week 3: Database Mastery

### SQL Fundamentals to Advanced

#### Day 15-17: SQL Basics & Intermediate
- **DDL, DML, DCL Commands**
- **Joins**
  - INNER, LEFT, RIGHT, FULL OUTER
  - CROSS JOIN, SELF JOIN
- **Aggregations**
  - GROUP BY, HAVING
  - Window Functions (ROW_NUMBER, RANK, DENSE_RANK)
- **Subqueries**
  - Correlated vs Non-correlated
  - EXISTS, IN, ANY, ALL

#### Day 18-19: Advanced SQL
- **CTEs (Common Table Expressions)**
- **Recursive Queries**
- **Pivot/Unpivot**
- **Query Optimization**
  - Execution plans
  - Index usage
  - Query hints

#### Day 20-21: Database Design & Theory
- **Normalization**
  - 1NF, 2NF, 3NF, BCNF
  - When to denormalize
- **ACID Properties**
  - Atomicity, Consistency, Isolation, Durability
  - Transaction isolation levels
- **CAP Theorem**
- **Indexing Strategies**
  - B-Tree vs Hash indexes
  - Clustered vs Non-clustered
  - Covering indexes

### SQL Practice Problems

```sql
-- Practice these types of queries daily:

-- 1. Find second highest salary
SELECT MAX(salary) 
FROM employees 
WHERE salary < (SELECT MAX(salary) FROM employees);

-- 2. Running total using window functions
SELECT 
    date,
    amount,
    SUM(amount) OVER (ORDER BY date) as running_total
FROM transactions;

-- 3. Find duplicate records
SELECT email, COUNT(*) 
FROM users 
GROUP BY email 
HAVING COUNT(*) > 1;

-- 4. Hierarchical queries (manager-employee)
WITH RECURSIVE emp_hierarchy AS (
    SELECT id, name, manager_id, 1 as level
    FROM employees
    WHERE manager_id IS NULL
    UNION ALL
    SELECT e.id, e.name, e.manager_id, h.level + 1
    FROM employees e
    JOIN emp_hierarchy h ON e.manager_id = h.id
)
SELECT * FROM emp_hierarchy;

-- 5. Pivot table example
SELECT * FROM (
    SELECT customer_id, product, quantity
    FROM orders
) PIVOT (
    SUM(quantity) FOR product IN ('A', 'B', 'C')
);
```

---

## Week 4: Integration & Mock Interviews

### Day 22-24: Python + Database Integration
- **Database Connectivity**
  - psycopg2, pymongo, redis-py
  - Connection pooling
  - Transaction management
- **ORMs**
  - SQLAlchemy basics
  - Query optimization with ORMs
- **Data Processing**
  - Pandas with SQL
  - Bulk operations
  - ETL patterns in Python

### Day 25-27: Banking Domain Specific
- **Financial Calculations**
  - Interest calculations
  - Loan amortization
  - Risk calculations
- **Security Considerations**
  - SQL injection prevention
  - Parameterized queries
  - Encryption/Hashing in Python
- **Compliance & Audit**
  - Transaction logging
  - Data retention policies
  - PII handling

### Day 28-30: Mock Interviews & Final Prep

---

## Bank of America Specific Focus Areas

### 1. Python Coding Patterns They Love

```python
# Clean, Pythonic code
# Bad
list = []
for i in range(10):
    if i % 2 == 0:
        list.append(i)

# Good
even_numbers = [i for i in range(10) if i % 2 == 0]

# Exception handling
try:
    process_transaction()
except TransactionError as e:
    log_error(e)
    rollback()
finally:
    close_connections()

# Type hints (Python 3.5+)
from typing import List, Dict, Optional

def process_accounts(
    account_ids: List[int], 
    filters: Optional[Dict[str, str]] = None
) -> List[Dict]:
    pass
```

### 2. Database Scenarios for Banking

```sql
-- Transaction consistency
BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
COMMIT;

-- Fraud detection query
WITH suspicious_transactions AS (
    SELECT 
        account_id,
        COUNT(*) as tx_count,
        SUM(amount) as total_amount
    FROM transactions
    WHERE 
        transaction_date >= DATEADD(hour, -1, GETDATE())
    GROUP BY account_id
    HAVING COUNT(*) > 10 OR SUM(amount) > 10000
)
SELECT * FROM suspicious_transactions;

-- Account balance reconciliation
SELECT 
    a.account_id,
    a.current_balance,
    COALESCE(SUM(t.amount), 0) as calculated_balance,
    a.current_balance - COALESCE(SUM(t.amount), 0) as difference
FROM accounts a
LEFT JOIN transactions t ON a.account_id = t.account_id
GROUP BY a.account_id, a.current_balance
HAVING a.current_balance != COALESCE(SUM(t.amount), 0);
```

---

## Interview Question Bank

### Python Questions to Expect

1. **What's the difference between @staticmethod and @classmethod?**
2. **Explain Python's GIL and its implications**
3. **How does Python's memory management work?**
4. **What are metaclasses and when would you use them?**
5. **Explain the difference between deep copy and shallow copy**
6. **How do you handle circular imports in Python?**
7. **What's the difference between __new__ and __init__?**
8. **Explain descriptor protocol in Python**
9. **How does Python's MRO (Method Resolution Order) work?**
10. **What are slots in Python classes?**

### Database Questions to Expect

1. **Explain ACID properties with banking examples**
2. **What's the difference between DELETE, TRUNCATE, and DROP?**
3. **How do you optimize a slow query?**
4. **Explain different types of indexes and when to use each**
5. **What are transaction isolation levels?**
6. **How do you prevent SQL injection?**
7. **Explain normalization and when to denormalize**
8. **What's the difference between UNION and UNION ALL?**
9. **How do window functions work?**
10. **Explain deadlock and how to prevent it**

---

## Coding Problems to Practice Daily

### Week 1: Easy to Medium
- Two Sum (with hash map optimization)
- Valid Parentheses
- Merge Two Sorted Lists
- Best Time to Buy and Sell Stock
- LRU Cache Implementation

### Week 2: Medium
- Group Anagrams
- Longest Substring Without Repeating Characters
- Add Two Numbers (Linked List)
- Container With Most Water
- 3Sum

### Week 3: Medium to Hard
- Median of Two Sorted Arrays
- Regular Expression Matching
- Merge k Sorted Lists
- Trapping Rain Water
- Word Search II

### Week 4: Banking Specific
- Design ATM System
- Implement Transaction System with Rollback
- Design Bank Account with Thread Safety
- Implement Rate Limiter
- Design Fraud Detection System

---

## Your STAR Stories from Experience

### 1. ICICI Bank Agreement Generator
**Situation**: ICICI Bank needed agreements for 82+ branches
**Task**: Automate the agreement generation process
**Action**: Built Python-based generator with template engine
**Result**: Reduced time from 3 days to 5 minutes

### 2. JNPT Attendance System
**Situation**: Manual attendance processing taking 4 hours
**Task**: Optimize the attendance calculation system
**Action**: Implemented efficient algorithms and database queries
**Result**: Reduced processing to 30 seconds for 200+ personnel

### 3. Enterprise LMS Performance
**Situation**: Video loading times causing user frustration
**Task**: Improve system performance
**Action**: Optimized database queries and implemented caching
**Result**: 93% improvement in video load times

---

## Daily Study Schedule

### Morning (2 hours)
- 30 min: Python concept review
- 1 hour: Solve 2-3 Python problems
- 30 min: Review solutions and optimize

### Evening (2 hours)
- 30 min: Database concept review
- 1 hour: SQL practice problems
- 30 min: System design for banking

### Weekend
- 2 hours: Mock interview practice
- 2 hours: Weak area deep dive
- 1 hour: Review week's progress

---

## Resources

### Python
- Python Docs: https://docs.python.org/3/
- Real Python: https://realpython.com/
- Python Cookbook by David Beazley

### Databases
- SQLZoo: https://sqlzoo.net/
- HackerRank SQL: https://www.hackerrank.com/domains/sql
- LeetCode Database Problems

### Banking Domain
- Bank of America Tech Blog
- Financial Services Cloud Architecture patterns
- PCI DSS Compliance basics

---

## Week Before Interview

1. **Day -7 to -5**: Review all concepts, no new learning
2. **Day -4 to -3**: Mock interviews with friends
3. **Day -2**: Review STAR stories and projects
4. **Day -1**: Light review, good rest

## Interview Day Checklist
- [ ] Review this document's key points
- [ ] Practice explaining your projects clearly
- [ ] Prepare questions about BoA's tech stack
- [ ] Test your video/audio setup
- [ ] Have water and notebook ready

---

## Questions to Ask Them
1. What Python frameworks does the team use?
2. What database systems are primarily used?
3. How does the team handle code reviews?
4. What's the deployment process like?
5. What are the biggest technical challenges the team faces?