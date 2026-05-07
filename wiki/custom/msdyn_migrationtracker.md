---
logical: "msdyn_migrationtracker"
display: "Individuazione migrazione"
entitySetName: "msdyn_migrationtrackers"
primaryId: "msdyn_migrationtrackerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Individuazione migrazione

Entità che tiene traccia del processo di migrazione degli elementi di contratti di servizio/aggiornamento automatico dei record da legacy a moderni

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_migrationtracker` |
| Display name | Individuazione migrazione |
| Display (plural) | Individuazioni migrazione |
| Schema name | `msdyn_migrationtracker` |
| Entity set (Web API) | `msdyn_migrationtrackers` |
| Primary id attribute | `msdyn_migrationtrackerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_migrationtrackers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_migrationtrackers(<guid>)
POST /api/data/v9.2/msdyn_migrationtrackers
PATCH /api/data/v9.2/msdyn_migrationtrackers(<guid>)
DELETE /api/data/v9.2/msdyn_migrationtrackers(<guid>)
```

## Attributes

Writable: **29** · Read-only: **14**

### Writable

`correlationid`, `importsequencenumber`, `msdyn_IsMigrationComplete`, `msdyn_correlationid`, `msdyn_legacyconvertruleid`, `msdyn_legacyconvertruleitemid`, `msdyn_legacyruleidtype`, `msdyn_legacyruleitemidtype`, `msdyn_legacyslaid`, `msdyn_legacyslaitemid`, `msdyn_migrationstatus`, `msdyn_migrationstatusexception`, `msdyn_migrationstatusreason`, `msdyn_migrationtrackerid`, `msdyn_migrationtype`, `msdyn_modernconvertruleid`, `msdyn_modernconvertruleitemid`, `msdyn_modernruleidtype`, `msdyn_modernruleitemidtype`, `msdyn_modernslaid`, `msdyn_modernslaitemid`, `msdyn_name`, `msdyn_objecttypecode`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_legacyruleidname`, `msdyn_legacyruleitemidname`, `msdyn_modernruleidname`, `msdyn_modernruleitemidname`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_migrationtracker_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_migrationtracker_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_migrationtracker_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_migrationtracker_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_migrationtracker` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_migrationtracker` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_migrationtracker` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_migrationtracker` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_migrationtracker_LegacySLA_sla` | [sla](sla.md) | `msdyn_legacyslaid` | `msdyn_LegacySLAId` |
| `msdyn_migrationtracker_LegacySLAItem_slaitem` | [slaitem](slaitem.md) | `msdyn_legacyslaitemid` | `msdyn_LegacySLAItemId` |
| `msdyn_migrationtracker_ModernSLA_sla` | [sla](sla.md) | `msdyn_modernslaid` | `msdyn_ModernSLAId` |
| `msdyn_migrationtracker_ModernSLAItem_slaitem` | [slaitem](slaitem.md) | `msdyn_modernslaitemid` | `msdyn_ModernSLAItemId` |
| `msdyn_migrationtracker_LegacyConvertRule_convertrule` | [convertrule](convertrule.md) | `msdyn_legacyconvertruleid` | `msdyn_LegacyConvertRuleId` |
| `msdyn_migrationtracker_LegacyConvertRuleItem_convertruleitem` | [convertruleitem](convertruleitem.md) | `msdyn_legacyconvertruleitemid` | `msdyn_LegacyConvertRuleItemId` |
| `msdyn_migrationtracker_ModernConvertRule_convertrule` | [convertrule](convertrule.md) | `msdyn_modernconvertruleid` | `msdyn_ModernConvertRuleId` |
| `msdyn_migrationtracker_ModernConvertRuleItem_convertruleitem` | [convertruleitem](convertruleitem.md) | `msdyn_modernconvertruleitemid` | `msdyn_ModernConvertRuleItemId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_migrationtracker_SyncErrors` | [msdyn_migrationtracker](msdyn_migrationtracker.md) | `regardingobjectid` | `regardingobjectid_msdyn_migrationtracker` |
| `msdyn_migrationtracker_DuplicateMatchingRecord` | [msdyn_migrationtracker](msdyn_migrationtracker.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_migrationtracker` |
| `msdyn_migrationtracker_DuplicateBaseRecord` | [msdyn_migrationtracker](msdyn_migrationtracker.md) | `baserecordid` | `baserecordid_msdyn_migrationtracker` |
| `msdyn_migrationtracker_AsyncOperations` | [msdyn_migrationtracker](msdyn_migrationtracker.md) | `regardingobjectid` | `regardingobjectid_msdyn_migrationtracker` |
| `msdyn_migrationtracker_MailboxTrackingFolders` | [msdyn_migrationtracker](msdyn_migrationtracker.md) | `regardingobjectid` | `regardingobjectid_msdyn_migrationtracker` |
| `msdyn_migrationtracker_UserEntityInstanceDatas` | [msdyn_migrationtracker](msdyn_migrationtracker.md) | `objectid` | `objectid_msdyn_migrationtracker` |
| `msdyn_migrationtracker_ProcessSession` | [msdyn_migrationtracker](msdyn_migrationtracker.md) | `regardingobjectid` | `regardingobjectid_msdyn_migrationtracker` |
| `msdyn_migrationtracker_BulkDeleteFailures` | [msdyn_migrationtracker](msdyn_migrationtracker.md) | `regardingobjectid` | `regardingobjectid_msdyn_migrationtracker` |
| `msdyn_migrationtracker_PrincipalObjectAttributeAccesses` | [msdyn_migrationtracker](msdyn_migrationtracker.md) | `objectid` | `objectid_msdyn_migrationtracker` |


## Source

Generated from [msdyn_migrationtracker (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_migrationtracker')) on 2026-05-07.