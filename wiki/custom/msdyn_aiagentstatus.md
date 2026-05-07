---
logical: "msdyn_aiagentstatus"
display: "Stato agente IA"
entitySetName: "msdyn_aiagentstatuses"
primaryId: "msdyn_aiagentstatusid"
primaryName: "msdyn_currentaistatus"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato agente IA

Tiene traccia dello stato dell'agente IA per il record specificato

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aiagentstatus` |
| Display name | Stato agente IA |
| Display (plural) | Stati agente IA |
| Schema name | `msdyn_aiagentstatus` |
| Entity set (Web API) | `msdyn_aiagentstatuses` |
| Primary id attribute | `msdyn_aiagentstatusid` |
| Primary name attribute | `msdyn_currentaistatus` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aiagentstatuses?$select=msdyn_currentaistatus&$top=10
GET /api/data/v9.2/msdyn_aiagentstatuses(<guid>)
POST /api/data/v9.2/msdyn_aiagentstatuses
PATCH /api/data/v9.2/msdyn_aiagentstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_aiagentstatuses(<guid>)
```

## Attributes

Writable: **17** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_agentmode`, `msdyn_aiagentstatusid`, `msdyn_currentaistatus`, `msdyn_emailssent`, `msdyn_escalatedon`, `msdyn_fallbackreason`, `msdyn_lastaction`, `msdyn_lastemailactivity`, `msdyn_lastintent`, `msdyn_lastintentgroup`, `msdyn_targetentity`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_email_msdyn_aiagentstatus` | [email](email.md) | `msdyn_lastemailactivity` | `msdyn_lastemailactivity` |
| `msdyn_msdyn_intent_msdyn_aiagentstatus` | [msdyn_intent](msdyn_intent.md) | `msdyn_lastintent` | `msdyn_lastintent` |
| `msdyn_msdyn_intentgroup_msdyn_aiagentstatus` | [msdyn_intent](msdyn_intent.md) | `msdyn_lastintentgroup` | `msdyn_lastintentgroup` |
| `msdyn_msdyn_aiagentstatus_incident_msdyn_targetentity` | [incident](incident.md) | `msdyn_targetentity` | `msdyn_targetentity_incident` |
| `lk_msdyn_aiagentstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aiagentstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aiagentstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aiagentstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_aiagentstatus` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aiagentstatus_SyncErrors` | [msdyn_aiagentstatus](msdyn_aiagentstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiagentstatus` |
| `msdyn_aiagentstatus_AsyncOperations` | [msdyn_aiagentstatus](msdyn_aiagentstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiagentstatus` |
| `msdyn_aiagentstatus_MailboxTrackingFolders` | [msdyn_aiagentstatus](msdyn_aiagentstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiagentstatus` |
| `msdyn_aiagentstatus_UserEntityInstanceDatas` | [msdyn_aiagentstatus](msdyn_aiagentstatus.md) | `objectid` | `objectid_msdyn_aiagentstatus` |
| `msdyn_aiagentstatus_ProcessSession` | [msdyn_aiagentstatus](msdyn_aiagentstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiagentstatus` |
| `msdyn_aiagentstatus_BulkDeleteFailures` | [msdyn_aiagentstatus](msdyn_aiagentstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiagentstatus` |
| `msdyn_aiagentstatus_PrincipalObjectAttributeAccesses` | [msdyn_aiagentstatus](msdyn_aiagentstatus.md) | `objectid` | `objectid_msdyn_aiagentstatus` |
| `msdyn_incident_msdyn_aiagentstatus` | [msdyn_aiagentstatus](msdyn_aiagentstatus.md) | `msdyn_aiagentstatus` | `msdyn_aiagentstatus` |


## Source

Generated from [msdyn_aiagentstatus (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aiagentstatus')) on 2026-05-07.