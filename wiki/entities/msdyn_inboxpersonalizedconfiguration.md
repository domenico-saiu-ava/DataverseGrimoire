---
logical: "msdyn_inboxpersonalizedconfiguration"
display: "Inbox Personalized Configuration"
entitySetName: "msdyn_inboxpersonalizedconfigurations"
primaryId: "msdyn_inboxpersonalizedconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Inbox Personalized Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_inboxpersonalizedconfiguration` |
| Display name | Inbox Personalized Configuration |
| Display (plural) | Inbox Personalized Configurations |
| Schema name | `msdyn_inboxpersonalizedconfiguration` |
| Entity set (Web API) | `msdyn_inboxpersonalizedconfigurations` |
| Primary id attribute | `msdyn_inboxpersonalizedconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_inboxpersonalizedconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_inboxpersonalizedconfigurations(<guid>)
POST /api/data/v9.2/msdyn_inboxpersonalizedconfigurations
PATCH /api/data/v9.2/msdyn_inboxpersonalizedconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_inboxpersonalizedconfigurations(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_configuration`, `msdyn_defaultsort`, `msdyn_inboxpersonalizedconfigurationId`, `msdyn_isdefault`, `msdyn_isvisible`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_inboxpersonalizedconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_inboxpersonalizedconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_inboxpersonalizedconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_inboxpersonalizedconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_inboxpersonalizedconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_inboxpersonalizedconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_inboxpersonalizedconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_inboxpersonalizedconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_inboxpersonalizedconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_inboxpersonalizedconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_inboxpersonalizedconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_inboxpersonalizedconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_inboxpersonalizedconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_inboxpersonalizedconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_inboxpersonalizedconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_inboxpersonalizedconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_inboxpersonalizedconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_inboxpersonalizedconfiguration.md) on 2026-05-06.