---
logical: "cai_dispatchingrule"
display: "Regola smistamento Lead"
entitySetName: "cai_dispatchingrules"
primaryId: "cai_dispatchingruleid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola smistamento Lead

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_dispatchingrule` |
| Display name | Regola smistamento Lead |
| Display (plural) | Regole smistamento Lead |
| Schema name | `cai_dispatchingrule` |
| Entity set (Web API) | `cai_dispatchingrules` |
| Primary id attribute | `cai_dispatchingruleid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_dispatchingrules?$select=cai_name&$top=10
GET /api/data/v9.2/cai_dispatchingrules(<guid>)
POST /api/data/v9.2/cai_dispatchingrules
PATCH /api/data/v9.2/cai_dispatchingrules(<guid>)
DELETE /api/data/v9.2/cai_dispatchingrules(<guid>)
```

## Attributes

Writable: **24** · Read-only: **8**

### Writable

`cai_assignmentdeadlinehours`, `cai_attemptsbeforeescalationtocustomerservice`, `cai_code`, `cai_complexitylevelofadditionalfields`, `cai_complexitylevelticketdata`, `cai_concurrencytimehours`, `cai_contactusformtype`, `cai_destination`, `cai_dispatchingruleid`, `cai_firstassignment`, `cai_iscustomer`, `cai_leadformat`, `cai_leadtype`, `cai_messagetype`, `cai_name`, `cai_productid`, `cai_productserviceinterest`, `cai_sourcerequestid`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_cai_product_cai_dispatchingrule_productid` | [cai_product](cai_product.md) | `cai_productid` | `cai_productid` |
| `lk_cai_dispatchingrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_dispatchingrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_dispatchingrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_dispatchingrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_dispatchingrule` | [organization](organization.md) | `organizationid` | `organizationid` |
| `cai_cai_requestorigin_cai_dispatchingrule_sourcerequestid` | [cai_requestorigin](cai_requestorigin.md) | `cai_sourcerequestid` | `cai_sourcerequestid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_dispatchingrule_SyncErrors` | [cai_dispatchingrule](cai_dispatchingrule.md) | `regardingobjectid` | `regardingobjectid_cai_dispatchingrule` |
| `cai_dispatchingrule_DuplicateMatchingRecord` | [cai_dispatchingrule](cai_dispatchingrule.md) | `duplicaterecordid` | `duplicaterecordid_cai_dispatchingrule` |
| `cai_dispatchingrule_DuplicateBaseRecord` | [cai_dispatchingrule](cai_dispatchingrule.md) | `baserecordid` | `baserecordid_cai_dispatchingrule` |
| `cai_dispatchingrule_AsyncOperations` | [cai_dispatchingrule](cai_dispatchingrule.md) | `regardingobjectid` | `regardingobjectid_cai_dispatchingrule` |
| `cai_dispatchingrule_MailboxTrackingFolders` | [cai_dispatchingrule](cai_dispatchingrule.md) | `regardingobjectid` | `regardingobjectid_cai_dispatchingrule` |
| `cai_dispatchingrule_UserEntityInstanceDatas` | [cai_dispatchingrule](cai_dispatchingrule.md) | `objectid` | `objectid_cai_dispatchingrule` |
| `cai_dispatchingrule_ProcessSession` | [cai_dispatchingrule](cai_dispatchingrule.md) | `regardingobjectid` | `regardingobjectid_cai_dispatchingrule` |
| `cai_dispatchingrule_BulkDeleteFailures` | [cai_dispatchingrule](cai_dispatchingrule.md) | `regardingobjectid` | `regardingobjectid_cai_dispatchingrule` |
| `cai_dispatchingrule_PrincipalObjectAttributeAccesses` | [cai_dispatchingrule](cai_dispatchingrule.md) | `objectid` | `objectid_cai_dispatchingrule` |
| `cai_dispatchingruleadditionalfields_cai_dispatchingrule` | [cai_dispatchingrule](cai_dispatchingrule.md) | `cai_dispatchingruleid` | `cai_dispatchingruleid` |


## Source

Generated from [cai_dispatchingrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_dispatchingrule')) on 2026-05-07.