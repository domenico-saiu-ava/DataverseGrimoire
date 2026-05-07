---
logical: "msdyn_customeremailcommunication"
display: "Customer email communication"
entitySetName: "msdyn_customeremailcommunications"
primaryId: "msdyn_customeremailcommunicationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Customer email communication

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customeremailcommunication` |
| Display name | Customer email communication |
| Display (plural) | Customer email communication |
| Schema name | `msdyn_customeremailcommunication` |
| Entity set (Web API) | `msdyn_customeremailcommunications` |
| Primary id attribute | `msdyn_customeremailcommunicationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customeremailcommunications?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_customeremailcommunications(<guid>)
POST /api/data/v9.2/msdyn_customeremailcommunications
PATCH /api/data/v9.2/msdyn_customeremailcommunications(<guid>)
DELETE /api/data/v9.2/msdyn_customeremailcommunications(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_customeremailcommunicationId`, `msdyn_emailcounter`, `msdyn_emailparams`, `msdyn_name`, `msdyn_scheduledat`, `msdyn_templateid`, `msdyn_templatetype`, `msdyn_touserid`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_customeremailcommunication_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customeremailcommunication_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customeremailcommunication_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customeremailcommunication_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_customeremailcommunication_ToUserId` | [systemuser](systemuser.md) | `msdyn_touserid` | `msdyn_ToUserId` |
| `organization_msdyn_customeremailcommunication` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customeremailcommunication_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customeremailcommunication_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customeremailcommunication_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_customeremailcommunication_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_customeremailcommunication_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customeremailcommunication_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_customeremailcommunication_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customeremailcommunication_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_customeremailcommunication.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_customeremailcommunication.md) on 2026-05-06.