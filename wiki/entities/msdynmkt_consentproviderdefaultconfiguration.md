---
logical: "msdynmkt_consentproviderdefaultconfiguration"
display: "Consent Provider Default Configuration"
entitySetName: "msdynmkt_consentproviderdefaultconfigurations"
primaryId: "msdynmkt_consentproviderdefaultconfigurationid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Consent Provider Default Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_consentproviderdefaultconfiguration` |
| Display name | Consent Provider Default Configuration |
| Display (plural) | Consent Provider Default Configurations |
| Schema name | `msdynmkt_consentproviderdefaultconfiguration` |
| Entity set (Web API) | `msdynmkt_consentproviderdefaultconfigurations` |
| Primary id attribute | `msdynmkt_consentproviderdefaultconfigurationid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_consentproviderdefaultconfigurations?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_consentproviderdefaultconfigurations(<guid>)
POST /api/data/v9.2/msdynmkt_consentproviderdefaultconfigurations
PATCH /api/data/v9.2/msdynmkt_consentproviderdefaultconfigurations(<guid>)
DELETE /api/data/v9.2/msdynmkt_consentproviderdefaultconfigurations(<guid>)
```

## Attributes

Writable: **10** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_consentproviderdefaultconfigurationId`, `msdynmkt_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_consentproviderdefaultconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_consentproviderdefaultconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_consentproviderdefaultconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_consentproviderdefaultconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_consentproviderdefaultconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_consentproviderdefaultconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_consentproviderdefaultconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_consentproviderdefaultconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_compliancesettings4_msdynmkt_consentproviderdefaultconfiguration` | _n/a_ | `msdynmkt_extendedentityid` | _n/a_ |
| `msdynmkt_consentproviderdefaultconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentproviderdefaultconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentproviderdefaultconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_consentproviderdefaultconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_consentproviderdefaultconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentproviderdefaultconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_consentproviderdefaultconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentproviderdefaultconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_consentproviderdefaultconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_consentproviderdefaultconfiguration.md) on 2026-05-06.