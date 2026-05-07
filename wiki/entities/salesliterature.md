---
logical: "salesliterature"
display: "Sales Literature"
entitySetName: "salesliteratures"
primaryId: "salesliteratureid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Sales Literature

Storage of sales literature, which may contain one or more documents.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `salesliterature` |
| Display name | Sales Literature |
| Display (plural) | Sales Literature |
| Schema name | `SalesLiterature` |
| Entity set (Web API) | `salesliteratures` |
| Primary id attribute | `salesliteratureid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/salesliteratures?$select=name&$top=10
GET /api/data/v9.2/salesliteratures(<guid>)
POST /api/data/v9.2/salesliteratures
PATCH /api/data/v9.2/salesliteratures(<guid>)
DELETE /api/data/v9.2/salesliteratures(<guid>)
```

## Attributes

Writable: **19** · Read-only: **12**

### Writable

`Description`, `EmployeeContactId`, `EntityImage`, `ExpirationDate`, `HasAttachments`, `ImportSequenceNumber`, `IsCustomerViewable`, `KeyWords`, `LiteratureTypeCode`, `Name`, `OverriddenCreatedOn`, `ProcessId`, `SalesLiteratureId`, `StageId`, `SubjectId`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_salesliterature_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_salesliterature_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_salesliteraturebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_salesliteraturebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_sales_literature` | [organization](organization.md) | `organizationid` | `organizationid` |
| `processstage_salesliteratures` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `subject_sales_literature` | [subject](subject.md) | `subjectid` | `subjectid` |
| `system_user_sales_literature` | [systemuser](systemuser.md) | `employeecontactid` | `employeecontactid` |
| `TransactionCurrency_SalesLiterature` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sales_literature_items` | _n/a_ | `salesliteratureid` | _n/a_ |
| `SalesLiterature_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SalesLiterature_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `salesliterature_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `salesliterature_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `SalesLiterature_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SalesLiterature_SharepointDocumentLocation` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SalesLiterature_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `campaignactivitysalesliterature_association` | [itemid](itemid.md) | _n/a_ | _n/a_ |
| `campaignsalesliterature_association` | [entityid](entityid.md) | _n/a_ | _n/a_ |
| `competitorsalesliterature_association` | [salesliteratureid](salesliteratureid.md) | _n/a_ | _n/a_ |
| `productsalesliterature_association` | [salesliteratureid](salesliteratureid.md) | _n/a_ | _n/a_ |

## Source

Generated from [salesliterature.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/salesliterature.md) on 2026-05-06.