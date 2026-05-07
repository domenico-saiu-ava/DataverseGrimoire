---
logical: "msdyn_collabspaceteamassociation"
display: "Collab Space Team Association"
entitySetName: "msdyn_collabspaceteamassociations"
primaryId: "msdyn_collabspaceteamassociationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "None"
---

# Collab Space Team Association

Collab Space Team Association

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_collabspaceteamassociation` |
| Display name | Collab Space Team Association |
| Display (plural) | Collab Space Team Associations |
| Schema name | `msdyn_collabspaceteamassociation` |
| Entity set (Web API) | `msdyn_collabspaceteamassociations` |
| Primary id attribute | `msdyn_collabspaceteamassociationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_collabspaceteamassociations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_collabspaceteamassociations(<guid>)
POST /api/data/v9.2/msdyn_collabspaceteamassociations
PATCH /api/data/v9.2/msdyn_collabspaceteamassociations(<guid>)
DELETE /api/data/v9.2/msdyn_collabspaceteamassociations(<guid>)
```

## Attributes

Writable: **16** · Read-only: **7**

### Writable

`ImportSequenceNumber`, `msdyn_collabspaceteamassociationId`, `msdyn_crmrecordid`, `msdyn_crmrecordtype`, `msdyn_crmtype`, `msdyn_data`, `msdyn_dataversion`, `msdyn_name`, `msdyn_producttype`, `msdyn_teamid`, `msdyn_teamweburl`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_collabspaceteamassociation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_collabspaceteamassociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_collabspaceteamassociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_collabspaceteamassociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_collabspaceteamassociation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_collabspaceteamassociation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_collabspaceteamassociation_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_collabspaceteamassociation_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_collabspaceteamassociation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_collabspaceteamassociation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_collabspaceteamassociation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_collabspaceteamassociation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_collabspaceteamassociation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_collabspaceteamassociation.md) on 2026-05-06.