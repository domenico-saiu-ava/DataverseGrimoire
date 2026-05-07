---
logical: "msdynmkt_consentsystemconfiguration"
display: "Consent System Configuration"
entitySetName: "msdynmkt_consentsystemconfigurations"
primaryId: "msdynmkt_consentsystemconfigurationid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Consent System Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_consentsystemconfiguration` |
| Display name | Consent System Configuration |
| Display (plural) | Consent System Configurations |
| Schema name | `msdynmkt_consentsystemconfiguration` |
| Entity set (Web API) | `msdynmkt_consentsystemconfigurations` |
| Primary id attribute | `msdynmkt_consentsystemconfigurationid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_consentsystemconfigurations?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_consentsystemconfigurations(<guid>)
POST /api/data/v9.2/msdynmkt_consentsystemconfigurations
PATCH /api/data/v9.2/msdynmkt_consentsystemconfigurations(<guid>)
DELETE /api/data/v9.2/msdynmkt_consentsystemconfigurations(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_consentsystemconfigurationId`, `msdynmkt_name`, `msdynmkt_UseCjoConsentSystemForMkt`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_consentsystemconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_consentsystemconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_consentsystemconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_consentsystemconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_consentsystemconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_consentsystemconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_consentsystemconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_consentsystemconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_consentsystemconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentsystemconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentsystemconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_consentsystemconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_consentsystemconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentsystemconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_consentsystemconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentsystemconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_consentsystemconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_consentsystemconfiguration.md) on 2026-05-06.